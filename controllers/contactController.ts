import { Contact, ContactDocument} from "../models/contactModel";
import { Request, Response } from "express";

export class ContactController {
  // Handle index actions
  index = (req: Request, res: Response) => {
    Contact.find((err: Error, contacts: ContactDocument) => {
      if (err) {
          res.json({
            status: "error",
            message: err
          })
      }
      res.json({
        status: "success",
        message: "Contacts retrieved successfully",
        data: contacts,
      });
    });
  };
  
  
  // Handle create contact actions
  new = (req: Request, res: Response) => {
    //console.log(req.body);
    //console.log(req.params);
    const newContact = new Contact();
    const {name, email, gender, phone} = req.body;
    newContact.name = name ? name : newContact.name;
    newContact.email = email;
    newContact.gender = gender;
    newContact.phone = phone;
    
    // save the contact and check for errors
    newContact.save((err) => {
      if (err) res.json(err);
      res.json({
        message: "New contact created!",
        data: newContact,
      });
    });
    
  };
  
  
  // Handle view contact info
  view = (req: Request, res: Response) => {
    Contact.findById(req.params._id, (err: Error, contact: ContactDocument) => {
      console.log(req.params);
      if (err) res.send(err);
      res.json({
        message: "Contact details loading..",
        data: contact,
      });
    });
  };

  
  // Handle update contact info
  update = (req: Request, res: Response) => {
    Contact.findById(req.params._id, (err: Error, contactToUpdate: ContactDocument) => {
      //console.log(req.params._id);
      //console.log(contactToUpdate);
      if (err) res.send(err);
      contactToUpdate.name = req.body.name ? req.body.name : contactToUpdate.name;
      contactToUpdate.gender = req.body.gender;
      contactToUpdate.email = req.body.email;
      contactToUpdate.phone = req.body.phone;
      // save the contact and check for errors
      contactToUpdate.save((err: Error) => {
        if (err) res.json(err);
        res.json({
          message: "Contact Info updated",
          data: contactToUpdate,
        });
      });
    });
  };

  // Handle delete contact
  delete = (req: Request, res: Response) => {
    Contact.deleteOne(
      {
        _id: req.params._id,
      },
      (err: Error) => {
        if (err) res.send(err);
        res.json({
          status: "success",
          message: "Contact deleted",
        });
      }
    );
  };
  
}


