import { Request, Response } from "express";
import { Contact } from "../models/contactModel";
import { faker } from "@faker-js/faker";
import { client } from "../src/redisServer";
//import { axiosObj } from "./axios.config";

const seed = async () => {
  try {
    const contacts = [];
    for (let i = 0; i < 50000; i++) {
      const name = faker.name.fullName();
      const newContact = {
        name: name,
        email: faker.internet.email(),
        gender: faker.animal.type(),
        phone: faker.phone.number(),
      };
      contacts.push(newContact);
    }
    await Contact.insertMany(contacts);
  } catch (error) {
    console.log(error);
  }
};

const key = "contacts";

async function getData() {
  const data = await Contact.find();
  return data;
}

export const populateDB = async (req: Request, res: Response) => {
  try {
    await seed();
    console.log("DB populated");
    res.status(201).send("Populated");
  } catch (error) {
    console.log("failed to populate DB");
    res.status(422).send({ error, message: "Error" });
  }
};
export const getWithRedis = async (req: Request, res: Response) => {
  console.time("Redis");

  const allContacts = await client.get(key);

  if (!allContacts) {
    console.log("Cache miss");
    const data = await getData();
    client.setEx(key, 1400, JSON.stringify(data));
    res.send(data);
  } else {
    console.log("Cache hit");
    const data = await client.get(key);
    res.send(JSON.parse(data));
  }
  console.timeEnd("Redis");
};

export const normalMongoGet = async (req: Request, res: Response) => {
  console.time("Mongo");
  const data = await getData();
  if (!data) {
    res.sendStatus(500);
  } else {
    res.status(200).send(data);
  }
  console.timeEnd("Mongo");
};

export const clearRedis = async (req: Request, res: Response) => {
  client.flushAll();
  res.send("cleared redis");
};

export const clearDB = async (req: Request, res: Response) => {
  Contact.collection.drop();
  res.send("cleared db");
};
