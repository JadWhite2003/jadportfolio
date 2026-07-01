import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactInfo, socials } from '@/data'
import { Send } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen py-20 px-6 bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,_rgba(75,108,183,0.65)_0%,_rgba(24,40,72,0.65)_100%)] backdrop-blur-md dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,_rgba(15,23,42,0.95)_0%,_rgba(2,8,18,0.95)_100%)]">
      <div className="text-center mb-12 space-y-3">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-white/70">Have a role available or want to discuss a project? Reach out!</p>
      </div>
      <div className="w-[80%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className='text-muted-foreground'>Always open to discuss new opportunities!</p>
              </div>
              <div className='space-y-4'>{contactInfo.map((item) => {
                return <a href={item.href} key={item.label} target="_blank" className='flex items-center gap-4 p-4 bg-white rounded-sm border-white/10 border-2 shadow-md shadow-white/20 dark:bg-transparent hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] transition-all duration-300' >
                  <div className='w-12 h-12 bg-gray-400/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500'>
                    <item.icon className='w-5 h-5 ' />
                  </div>
                  <div>
                    <p className='text-sm text-muted-foreground'>{item.label}</p>
                    <p className='font-medium'>{item.value}</p>
                  </div>
                </a>

              })}
              </div>
              {/* Socials */}
              <div>
                <h4 className='text-lg font-medium mb-4'>Follow Me</h4>
                <div className='flex gap-4'>
                  {socials.map((social) => (
                    <a
                      href={social.href}
                      key={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='w-12 h-12 bg-gray-400/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 '
                    >
                      <social.icon className='w-5 h-5 hover:scale-[1.23] hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] ' />
                    </a>

                  ))}
                </div>
              </div>

            </div>
          </div>
          {/* Contact Form */}
          <div>
            <form className="bg-transparent rounded-2xl p-8 space-y-6">
              <div className='grid sm:grid-cols-2 gap-4'>

                <div className='space-y-2'>
                  <label htmlFor="name" className='text-sm font-medium'>Name:</label>


                  <Input id="name" placeholder="Your Name" name="name" required className="bg-gray-100" />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="email" className='text-sm font-medium'>Email:</label>


                  <Input id="email" placeholder="Your Email" name="email" type="email" required className="bg-gray-100" />
                </div>
              </div>
              <div className='space-y-2'>
                <label htmlFor="subject" className='text-sm font-medium'>Subject:</label>
                <Input id="subject" placeholder="Subject" name="subject" required className="bg-gray-100" />

              </div>
              <div className='space-y-2'>
                <label htmlFor="message" className='text-sm font-medium'>Message:</label>
                <Textarea id="message" placeholder="Your Message" name="message" required rows={5} className="bg-gray-100" />
              </div>
              <Button type="submit" size={"lg"} className="w-full cursor-pointer">
                <Send className='w-4 h-4 mr-2'/>Send Message </Button>

            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact