import StarField from '@/components/StarField';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Mail, MapPin, User } from 'lucide-react';
import TopBar from "@/components/TopBar";
import { customerContacts } from '@/lib/contactsData';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={40} shootingCount={2} />
      <TopBar />
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-white/50">Get in touch with our team</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {customerContacts.map((contact, index) => (
            <Card key={index} className="bg-white/[0.04] border-white/[0.08]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-violet-500/20 rounded-full">
                    <User className="h-6 w-6 text-violet-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">{contact.name}</CardTitle>
                    <CardDescription className="text-white/50">Customer Contact</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {contact.phoneNumbers.map((phone, phoneIndex) => (
                  <div key={phoneIndex} className="flex items-center gap-3 p-3 bg-white/[0.04] rounded-lg border border-white/[0.08]">
                    <Phone className="h-4 w-4 text-violet-400 shrink-0" />
                    <a href={`tel:${phone}`} className="text-white hover:text-violet-300 transition-colors">
                      {phone}
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-violet-500/20 rounded-full">
                  <Mail className="h-6 w-6 text-violet-400" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl">Email</CardTitle>
                  <CardDescription className="text-white/50">Send us a message</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 p-3 bg-white/[0.04] rounded-lg border border-white/[0.08]">
                <Mail className="h-4 w-4 text-violet-400 shrink-0" />
                <a href="mailto:alexgetahuntadese@gmail.com" className="text-white hover:text-violet-300 transition-colors">
                  alexgetahuntadese@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-violet-500/20 rounded-full">
                  <MapPin className="h-6 w-6 text-violet-400" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl">Location</CardTitle>
                  <CardDescription className="text-white/50">Where we are</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 p-3 bg-white/[0.04] rounded-lg border border-white/[0.08]">
                <MapPin className="h-4 w-4 text-violet-400 shrink-0" />
                <span className="text-white">Harar, Ethiopia</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
