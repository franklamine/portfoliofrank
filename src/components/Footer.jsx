import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-slate-900 py-12 px-8 w-full">
            {/* Décalage du contenu uniquement, pas du footer complet */}
            <div className="ml-0 md:ml-[16.6667%]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white">

                    {/* À propos */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Frank Portfolio</h3>
                        <p className="text-sm leading-relaxed">
                            Développeur full-stack passionné, je crée des expériences web modernes, accessibles et performantes.
                        </p>
                    </div>

                    {/* Liens utiles */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-blue-500 transition">Accueil</a></li>
                            <li><a href="/about" className="hover:text-blue-500 transition">À propos</a></li>
                            <li><a href="/projects" className="hover:text-blue-500 transition">Projets</a></li>
                            <li><a href="/stack" className="hover:text-blue-500 transition">Stack</a></li>
                            <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact & Réseaux */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <p className="text-sm mb-4">frank@example.com</p>
                        <div className="flex space-x-6 text-xl">
                            <a href="mailto:frank@example.com" aria-label="Email" className="hover:text-blue-500 transition"><FaEnvelope /></a>
                            <a href="https://twitter.com/tonprofil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaTwitter /></a>
                            <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><FaLinkedin /></a>
                            <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition"><FaGithub /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright centré */}
                <div className="mt-10 border-t border-slate-700 pt-6 text-center text-xs text-slate-500 select-none">
                    © Copyright {new Date().getFullYear()}. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
