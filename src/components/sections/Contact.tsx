import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Let's Work Together</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to discuss the latest in AI? I'm always open to new opportunities and interesting conversations.
                </p>

                <a
                    href="mailto:seninashraf765@gmail.com"
                    className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-xl font-medium hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/25 mb-16"
                >
                    <Mail size={24} />
                    seninashraf765@gmail.com
                </a>

                <div className="flex justify-center gap-8">
                    <SocialLink href="https://github.com/SeninAshraf" icon={<Github size={28} />} label="GitHub" />
                    <SocialLink href="https://www.linkedin.com/in/senin-ashraf-96a29b252" icon={<Linkedin size={28} />} label="LinkedIn" />
                    <SocialLink href="https://www.instagram.com/_senin___" icon={<Instagram size={28} />} label="Instagram" />
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1"
        aria-label={label}
    >
        {icon}
    </a>
);
