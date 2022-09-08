import { Router } from "express";
import { ContactController } from "../controllers/contactController";

export const apiRoutes = Router(); 

const contactController = new ContactController();

apiRoutes.get("/", (req, res) => {
    res.json({
      status: "API Its Working",
      message: "Welcome to RESTHub crafted with love!",
    });
});

// Contact routes
apiRoutes.route("/contacts")
    .get(contactController.index)
    .post(contactController.new);

apiRoutes.route("/contacts/:_id")
    .patch(contactController.view)
    .put(contactController.update)
    .delete(contactController.delete);
  
  



