'use client';

import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export default function ContactInformation(){
    return (
        <>
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-10 mb-6">Follow Me</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
            </div>
            </>
    )
}