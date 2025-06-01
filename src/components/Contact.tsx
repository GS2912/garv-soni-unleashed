
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate, share ideas, or just have a conversation about growth and innovation? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-800">Email Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Drop me a line for collaborations, opportunities, or just to say hello.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-800">Let's Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Connect with me on social media and join the conversation.
                </p>
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Follow Me
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-8 mb-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-125">
                <Github size={32} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-125">
                <Linkedin size={32} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-125">
                <Twitter size={32} />
              </a>
            </div>
            <p className="text-gray-600">
              © 2024 Garv Soni. Building the future, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
