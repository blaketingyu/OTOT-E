import { Request, Response } from "express";
import { Contact } from "../models/contactModel";
//import { faker } from "@faker-js/faker";
import { client } from "../src/redisServer";
import { axiosObj } from "./axios.config";

/*
const seed = async () => {
  try {
    const contacts = [];
    for (let i = 0; i < 10; i++) {
      const name = faker.name.fullName();
      const newContact = {
        name: name,
        email: faker.internet.email(),
        gender: faker.animal.type(),
        phone: faker.phone.number(),
      };
      contacts.push(newContact);
      client.set(name, JSON.stringify(newContact));
    }
    await Contact.insertMany(contacts);
  } catch (error) {
    console.log(error);
  }
};
*/
const key = "Pokemons";

async function getData() {
  const { data } = await axiosObj.get("/api/v2/pokemon?limit=905");
  return data;
}

export const getWithRedis = async (req: Request, res: Response) => {
  console.time("redis runtime");

  const allPokemon = await client.get(key);

  if (!allPokemon) {
    console.log("Cache miss");
    const data = await getData();
    client.setEx(key, 60, JSON.stringify(data));
    res.send(data);
  } else {
    console.log("Cache hit");
    const data = await client.get(key);
    res.send(JSON.parse(data));
  }
  console.timeEnd("redis runtime");
};

export const getWithAxios = async (req: Request, res: Response) => {
  console.time("axios runtime");
  const data = await getData();
  if (!data) {
    res.sendStatus(500);
  } else {
    res.status(200).send(data);
  }
  console.timeEnd("axios runtime");
};

export const redisTeardown = async (req: Request, res: Response) => {
  client.flushAll();
  res.send("cleared redis");
};
