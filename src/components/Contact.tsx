import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin,
  Send,
  MessageCircle,
  Video,
  Linkedin,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "rince.donfack@gmail.com",
      link: "mailto:rince.donfack@gmail.com",
      color: "text-red-600",
      bgColor: "bg-red-100",
      hoverColor: "hover:bg-red-200"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+237 651673155",
      link: "tel:+237651673155",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      hoverColor: "hover:bg-blue-200"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+237 651673155",
      link: "https://wa.me/237651673155",
      color: "text-green-600",
      bgColor: "bg-green-100",
      hoverColor: "hover:bg-green-200"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Microsoft Teams",
      value: "Rejoindre la réunion",
      link: "https://teams.live.com/l/invite/FDArSbN3wQVqS1c0gI?v=g1",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      hoverColor: "hover:bg-purple-200"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "Dschang, Cameroun",
      link: null,
      color: "text-gray-600",
      bgColor: "bg-gray-100",
      hoverColor: "hover:bg-gray-200"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container section-padding">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Contactez-<span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">moi</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              Prêt à collaborer sur votre prochain projet ? N'hésitez pas à me contacter !
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className={`space-y-8 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '200ms' }}>
              <div>
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                  Restons en contact
                </h3>
                <p className="mb-8 leading-relaxed text-gray-600">
                  Je suis toujours ouvert aux nouvelles opportunités et aux projets intéressants. 
                  Que ce soit pour une collaboration, un projet freelance, ou simplement pour échanger 
                  sur les technologies, n'hésitez pas à me contacter.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className={`flex items-start p-4 space-x-4 transition-all duration-300 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transform hover:-translate-y-1 ${info.hoverColor}`}>
                      <div className={`flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl ${info.bgColor} ${info.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-blue-700">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`inline-flex items-center gap-2 font-medium transition-all duration-300 ${info.color} hover:underline hover:scale-105`}
                          >
                            {info.value}
                            {info.link.startsWith('http') && (
                              <ExternalLink className="w-4 h-4" />
                            )}
                          </a>
                        ) : (
                          <p className="font-medium text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <a
                  href="https://linkedin.com/in/rince-donfack-a5a0062a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '400ms' }}>
              <form onSubmit={handleSubmit} className="p-8 transition-shadow duration-300 bg-white border border-gray-100 shadow-xl rounded-2xl hover:shadow-2xl">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                  Envoyez-moi un message
                </h3>

                {submitted && (
                  <div className="px-4 py-3 mb-6 text-green-700 border border-green-200 rounded-lg bg-green-50 animate-fade-in">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Message envoyé avec succès ! Je vous répondrai bientôt.
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 transition-all duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 transition-all duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-all duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 transition-all duration-200 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center w-full gap-3 px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;