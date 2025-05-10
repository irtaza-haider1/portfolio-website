import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = contactSchema.parse(req.body);
      
      // Store contact message
      const contact = await storage.createContact(contactData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Contact message sent successfully",
        data: contact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to process your message. Please try again."
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
