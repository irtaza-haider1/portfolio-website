import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, Codepen } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [titleRef, isTitleVisible] = useScrollReveal();
  const [formRef, isFormVisible] = useScrollReveal();
  const [infoRef, isInfoVisible] = useScrollReveal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const { mutate } = useMutation({
    mutationFn: async (data: FormValues) => {
      setIsSubmitting(true);
      const response = await apiRequest('POST', '/api/contact', data);
      const result = await response.json();
      return result;
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  function onSubmit(data: FormValues) {
    mutate(data);
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${isTitleVisible ? 'reveal active' : 'reveal'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Get In <span className="text-neon-blue">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`w-full lg:w-1/2 ${isFormVisible ? 'reveal active' : 'reveal'}`}
          >
            <div className="glass-effect bg-background/40 p-8 rounded-xl border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="bg-background border-border focus:ring-neon-blue"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="john@example.com" 
                            className="bg-background border-border focus:ring-neon-blue"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Project Discussion" 
                            className="bg-background border-border focus:ring-neon-blue"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project or inquiry..." 
                            className="bg-background border-border focus:ring-neon-blue min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div 
            ref={infoRef}
            className={`w-full lg:w-1/2 ${isInfoVisible ? 'reveal active' : 'reveal'}`}
          >
            <div className="glass-effect bg-background/40 p-8 rounded-xl border border-border h-full">
              <h3 className="text-2xl font-bold mb-6 text-neon-green">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-background rounded-lg mr-4">
                    <Mail className="text-neon-blue h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:syed.irtaza@example.com" className="text-muted-foreground hover:text-neon-blue transition-colors">
                      syed.irtaza@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-background rounded-lg mr-4">
                    <MapPin className="text-neon-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">San Francisco, California, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-background rounded-lg mr-4">
                    <Phone className="text-neon-green h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-neon-green transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 flex items-center justify-center bg-background rounded-lg hover:bg-neon-blue/20 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="text-neon-blue h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 flex items-center justify-center bg-background rounded-lg hover:bg-neon-purple/20 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="text-neon-purple h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 flex items-center justify-center bg-background rounded-lg hover:bg-neon-green/20 transition-colors"
                      aria-label="Twitter Profile"
                    >
                      <Twitter className="text-neon-green h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 flex items-center justify-center bg-background rounded-lg hover:bg-blue-500/20 transition-colors"
                      aria-label="CodePen Profile"
                    >
                      <Codepen className="text-blue-500 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
