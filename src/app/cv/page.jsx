
export default function CVPage() {
  return (
    <main className="bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-8 py-12">

        {/* Header */}
        <section className="mb-12">
          <h1 className="text-5xl font-bold">Vinod Soba</h1>
          <p className="text-xl mt-2 text-slate-600">
            Front End Web Developer
          </p>
          <div className="py-2 flex flex-wrap gap-3 text-sm text-slate-500 items-center">
            <p>London, UK</p>
            <span>•</span>
            <p>07983 450 717</p>
            <span>•</span>
            <a
            href="mailto:vinodsoba@gmail.com"
            className="hover:text-black transition"
            rel="noopener noreferrer"
            target="_blank"
            >
            vinodsoba@gmail.com
            </a>
            <span>•</span>
            <a
            href="https://github.com/vinodsoba"
            target="_blank"
            className="hover:text-black transition"
            >
            GitHub
            </a>
            <span>•</span>
            <a
            href="https://www.vinodsoba.co.uk"
            target="_blank"
            className="hover:text-black transition"
            >
            Portfolio
            </a>
            <span>•</span>
            <a
            href="https://www.linkedin.com/in/vinodsoba"
            target="_blank"
            className="hover:text-black transition"
            >
            LinkedIn
            </a>
        </div>
        </section>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Professional Summary
          </h2>

          <p className="leading-7 text-slate-700">
            Front End Developer with 10+ years of experience building and maintaining responsive websites, ecommerce platforms, and CMS-driven applications. Experienced working with React, Next.js, JavaScript, WordPress, Magento, Tailwind CSS, and modern frontend workflows including Git and component-based development. Strong commercial background delivering production-ready websites, landing pages, and frontend solutions focused on user experience, performance, SEO, and conversion optimisation.
          </p>
        </section>
        <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
            Technical Skills
        </h2>

        <div className="space-y-6">

            {/* Frontend */}
            <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                Frontend
            </h3>

            <div className="flex flex-wrap gap-3">
                {[
                "React",
                "Next.js",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                ].map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium"
                >
                    {skill}
                </span>
                ))}
            </div>
            </div>

            {/* CMS & Ecommerce */}
            <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                CMS & Ecommerce
            </h3>

            <div className="flex flex-wrap gap-3">
                {[
                "WordPress",
                "Magento 2",
                "ACF",
                ].map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium"
                >
                    {skill}
                </span>
                ))}
            </div>
            </div>

            {/* Tools */}
            <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                Tools
            </h3>

            <div className="flex flex-wrap gap-3">
                {[
                "Git",
                "GitHub",
                "Node.js",
                "Jira",
                "Vagrant",
                ].map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium"
                >
                    {skill}
                </span>
                ))}
            </div>
            </div>

            {/* Ecommerce & Analytics */}
            <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                    Ecommerce & Analytics
                </h3>

                <div className="flex flex-wrap gap-3">
                    {[
                    "GA4",
                    "SEO",
                    "CRO",
                    "Responsive Design",
                    "Performance Optimisation",
                    "A/B Testing",
                    "Ecommerce UX",
                    ].map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-4 bg-slate-100 rounded-full text-sm font-medium hover:bg-slate-200 transition border border-slate-200"
                    >
                        {skill}
                    </span>
                    ))}
                
            </div>
        </div>
        </div>
        </section>
        <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
            Work Experience
        </h2>

        <div className="border-l border-slate-200">
            <div className="mb-12">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                        <h3 className="text-xl font-semibold">
                            Full Stack Developer
                        </h3>

                        <p className="text-slate-600">
                            Addison Lee
                        </p>
                    </div>

                    <span className="text-sm text-slate-500 mt-2 md:mt-0">
                    Oct 2022 — Present
                    </span>
                </div>

                <p className="text-slate-700 leading-7 mb-6">
                    Working across multiple company websites and digital platforms,
                    developing responsive frontend experiences, landing pages,
                    WordPress templates, and customer-focused web functionality.
                </p>

                <ul className="space-y-3 text-slate-700 leading-7 list-disc pl-5">

                <li>
                Developed and maintained responsive websites and landing pages
                using WordPress, ACF, HTML, CSS, JavaScript, and PHP.
                </li>

                <li>
                Built custom frontend templates and reusable website components
                focused on performance, responsive design, and user experience.
                </li>

                <li>
                Managed staging and production environments, testing and deploying
                website updates and new functionality.
                </li>

                <li>
                Implemented Git-based version control workflows to improve
                collaboration, deployment tracking, and code management.
                </li>

                <li>
                Integrated third-party tools including Freshdesk forms and chatbot
                functionality to improve customer engagement and lead generation.
                </li>

                <li>
                Worked closely with marketing teams to deliver SEO-focused landing
                pages, website campaigns, and content updates.
                </li>

                <li>
                Coordinated development tasks with third-party developers using Jira
                while acting as lead developer across website initiatives.
                </li>

                <li>
                Supported local development environments using Node.js and Vagrant
                virtual machines.
                </li>

                </ul>

            </div>
        </div>
            {/* Y Wilson */}
            <div className="mb-12 border-b border-slate-200 pb-12">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                <h3 className="text-xl font-semibold">
                    Front End Developer
                </h3>

                <p className="text-slate-600">
                    Y-Wilson
                </p>
                </div>

                <span className="text-sm text-slate-500 mt-2 md:mt-0">
                Jul 2022 — Oct 2022
                </span>
            </div>

            <p className="text-slate-700 leading-7 mb-6">
                Developed an interactive React-based Sudoku game focused on responsive
                frontend functionality, reusable components, and cross-device usability.
            </p>

            <ul className="space-y-3 text-slate-700 leading-7 list-disc pl-5">

                <li>
                Built reusable React components and interactive game functionality
                using JavaScript and component-based architecture.
                </li>

                <li>
                Developed timer logic, drag-and-drop interactions, and responsive
                gameplay features across desktop and mobile devices.
                </li>

                <li>
                Implemented responsive layouts and frontend interactions focused on
                usability and smooth user experience.
                </li>

                <li>
                Worked closely with stakeholders to deliver frontend functionality
                and interactive user experiences.
                </li>

            </ul>

            </div>

            {/* Nteractive */}
            <div className="mb-12 border-b border-slate-200 pb-12">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                <h3 className="text-xl font-semibold">
                    Front End Developer
                </h3>

                <p className="text-slate-600">
                    Nteractive
                </p>
                </div>

                <span className="text-sm text-slate-500 mt-2 md:mt-0">
                Oct 2021 — Jun 2022
                </span>
            </div>

            <p className="text-slate-700 leading-7 mb-6">
                Developed responsive event and campaign web experiences for global
                brands including Gartner, Hewlett Packard, and New Balance.
            </p>

            <ul className="space-y-3 text-slate-700 leading-7 list-disc pl-5">

                <li>
                Built and maintained responsive frontend event pages and branded
                digital experiences across multiple campaigns.
                </li>

                <li>
                Developed interactive website elements and layouts using HTML,
                CSS, JavaScript, and CMS platforms.
                </li>

                <li>
                Collaborated with design and marketing teams to deliver engaging
                user experiences and digital campaign assets.
                </li>

                <li>
                Produced frontend visuals, animations, and branded web assets
                aligned with client requirements and event campaigns.
                </li>

            </ul>

            </div>

            {/* Ocean Media Group*/}
            <div className="mb-12 border-b border-slate-200 pb-12">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                <h3 className="text-xl font-semibold">
                    Front End Developer
                </h3>

                <p className="text-slate-600">
                    Ocean Media Group
                </p>
                </div>

                <span className="text-sm text-slate-500 mt-2 md:mt-0">
                Oct 2019 — Sep 2021
                </span>
            </div>

            <p className="text-slate-700 leading-7 mb-6">
                Developed and maintained event websites, landing pages, and digital
                campaign assets across multiple brands and content platforms.
            </p>

            <ul className="space-y-3 text-slate-700 leading-7 list-disc pl-5">

                <li>
                Designed and developed responsive event websites and landing pages
                focused on user experience and campaign performance.
                </li>

                <li>
                Built and maintained WordPress themes and templates using
                Advanced Custom Fields (ACF).
                </li>

                <li>
                Worked across multiple CMS platforms delivering frontend updates,
                content integrations, and website improvements.
                </li>

                <li>
                Collaborated with marketing and design teams to deliver digital
                campaigns, email assets, and branded web experiences.
                </li>

                <li>
                Developed frontend layouts and interactive website elements using
                HTML, CSS, JavaScript, and jQuery.
                </li>

            </ul>

            </div>
        
            {/* St Johns Labs */}
            <div className="mb-12 border-b border-slate-200 pb-12">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                <h3 className="text-xl font-semibold">
                    Full Stack Developer
                </h3>

                <p className="text-slate-600">
                    St John’s Laboratory Ltd
                </p>
                </div>

                <span className="text-sm text-slate-500 mt-2 md:mt-0">
                Sep 2018 — Sep 2019
                </span>
            </div>

            <p className="text-slate-700 leading-7 mb-6">
                Worked on Magento ecommerce development, responsive frontend redesigns,
                and performance optimisation across the company website and digital platforms.
            </p>

            <ul className="space-y-3 text-slate-700 leading-7 list-disc pl-5">

                <li>
                Redesigned and developed responsive frontend pages including the
                homepage, antibody validation pages, and blog layouts.
                </li>

                <li>
                Supported the migration of the company ecommerce platform from
                Magento 1.9 and helped establish staging environments for testing
                and deployment workflows.
                </li>

                <li>
                Analysed, debugged, and tested frontend and backend functionality
                across staging and production environments.
                </li>

                <li>
                Built responsive layouts and interactive website functionality using
                Bootstrap, JavaScript, jQuery, HTML, and CSS.
                </li>

                <li>
                Optimised database queries and website performance to improve
                page speed and overall user experience.
                </li>

                <li>
                Managed website administration, user permissions, and regular
                website/database maintenance.
                </li>

            </ul>
            </div>

            {/* Registry Trust */}
            <div className="mb-12 border-b border-slate-200 pb-12">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                <h3 className="text-xl font-semibold">
                    Senior Full Stack Developer
                </h3>

                <p className="text-slate-600">
                    Registry Trust Ltd
                </p>
                </div>

                <span className="text-sm text-slate-500 mt-2 md:mt-0">
                Nov 2013 — Aug 2018
                </span>
            </div>

            <ul className="space-y-3 text-slate-700 leading-7 list-disc pl-5">

                <li>
                Built and maintained multiple company websites using WordPress
                and Joomla within an Agile development environment.
                </li>

                <li>
                Developed portal functionality to dynamically display client
                shareholdings, investments, and reporting data.
                </li>

                <li>
                Led and supported digital projects while mentoring and managing
                junior developers.
                </li>

            </ul>

            </div>

            {/* Regus */}
            <div className="mb-12">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                <h3 className="text-xl font-semibold">
                    Web Developer
                </h3>

                <p className="text-slate-600">
                    Regus
                </p>
                </div>

                <span className="text-sm text-slate-500 mt-2 md:mt-0">
                Mar 2011 — Oct 2013
                </span>
            </div>

            <ul className="space-y-3 text-slate-700 leading-7 list-disc pl-5">

                <li>
                Developed landing pages and microsites using ASP, HTML, CSS,
                and MySQL.
                </li>

                <li>
                Maintained company websites, resolved frontend issues, and
                deployed website updates across digital platforms.
                </li>

            </ul>

            

        </div>
        </section>
        

        <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
            Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {/* card */}

            <div className="border border-slate-200 rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            <h3 className="text-xl font-semibold mb-2">
                Addison Lee Digital Platform
            </h3>

            <p className="text-slate-600 leading-7 mb-6">
                Frontend development and website management across multiple
                company websites, landing pages, and customer-facing digital
                experiences.
            </p>

            <ul className="space-y-2 text-slate-700 leading-7 list-disc pl-5 mb-6">

                <li>
                Developed responsive landing pages and custom WordPress templates.
                </li>

                <li>
                Implemented frontend improvements focused on UX, responsiveness,
                and conversion optimisation.
                </li>

                <li>
                Managed staging and production deployments using Git workflows.
                </li>

                <li>
                Integrated Freshdesk forms and chatbot functionality to improve
                customer engagement.
                </li>

                <li>
                Collaborated with marketing teams to deliver SEO-focused
                campaign pages and website updates.
                </li>

            </ul>

            <div className="flex flex-wrap gap-3 mb-6">
                {[
                "WordPress",
                "ACF",
                "JavaScript",
                "Git",
                "SEO",
                "Responsive Design",
                "PHP",
                ].map((tech) => (
                <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 rounded-full text-sm border border-slate-200"
                >
                    {tech}
                </span>
                ))}
            </div>

            <div className="mt-auto">
                <a
                href="https://www.addisonlee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
                >
                View Website →
                </a>
            </div>

            </div>

            <div className="border border-slate-200 rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            <h3 className="text-xl font-semibold mb-2">
                Ocean Media Event Platforms
            </h3>

            <p className="text-slate-600 leading-7 mb-6">
                Frontend development and digital campaign work across multiple
                event and media brands, delivering responsive websites,
                landing pages, and marketing-focused user experiences.
            </p>

            <ul className="space-y-2 text-slate-700 leading-7 list-disc pl-5 mb-6">

                <li>
                Developed responsive event websites and campaign landing pages
                across multiple media brands.
                </li>

                <li>
                Built and maintained WordPress themes and templates using
                Advanced Custom Fields (ACF).
                </li>

                <li>
                Worked closely with marketing teams to deliver digital campaigns,
                website launches, and branded online experiences.
                </li>

                <li>
                Implemented frontend layouts and interactive website elements
                using HTML, CSS, JavaScript, and jQuery.
                </li>

                <li>
                Managed website updates and CMS-driven content across
                multiple platforms.
                </li>

            </ul>

            <div className="flex flex-wrap gap-3 mb-6">
                {[
                "WordPress",
                "ACF",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Responsive Design",
                "jQuery",
                ].map((tech) => (
                <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 rounded-full text-sm border border-slate-200"
                >
                    {tech}
                </span>
                ))}
            </div>

            <div className="mt-auto">
                <a
                href="https://www.nationalweddingshow.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
                >
                View Project →
                </a>
            </div>

            </div>

            <div className="border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition">

            <div className="flex items-start justify-between mb-4">

                <div>
                <h3 className="text-xl font-semibold mb-2">
                    BeautyBop Ecommerce Platform
                </h3>

                <p className="text-slate-600 leading-7">
                    Magento 2 ecommerce platform focused on frontend UX,
                    SEO optimisation, responsive design, and ecommerce
                    performance improvements.
                </p>
                </div>

            </div>

            <ul className="space-y-2 text-slate-700 leading-7 list-disc pl-5 mb-6">

                <li>
                Developed and maintained Magento frontend features and
                responsive ecommerce layouts.
                </li>

                <li>
                Implemented SEO improvements including brand category
                structures and optimisation strategies.
                </li>

                <li>
                Integrated GA4 ecommerce tracking and frontend analytics.
                </li>

                <li>
                Improved UX, navigation, and frontend responsiveness
                across the ecommerce experience.
                </li>

            </ul>

            <div className="flex flex-wrap gap-3 mb-6">
                {[
                "Magento 2",
                "JavaScript",
                "SEO",
                "GA4",
                "Responsive Design",
                "PHP",
                ].map((tech) => (
                <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 rounded-full text-sm border border-slate-200"
                >
                    {tech}
                </span>
                ))}
            </div>

            <a
                href="https://www.beautybop.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
            >
                View Project →
            </a>

            </div>

            <div className="border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition">

            <h3 className="text-xl font-semibold mb-2">
                React Sudoku Game
            </h3>

            <p className="text-slate-600 leading-7 mb-6">
                Interactive Sudoku game built using React with responsive
                gameplay, reusable components, drag-and-drop functionality,
                and timer-based game logic.
            </p>

            <ul className="space-y-2 text-slate-700 leading-7 list-disc pl-5 mb-6">

                <li>
                Built reusable React components and dynamic frontend interactions.
                </li>

                <li>
                Developed drag-and-drop gameplay mechanics and timer functionality.
                </li>

                <li>
                Implemented responsive layouts for desktop and mobile devices.
                </li>

            </ul>

            <div className="flex flex-wrap gap-3 mb-6">
                {[
                "React",
                "JavaScript",
                "Responsive Design",
                "CSS",
                ].map((tech) => (
                <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 rounded-full text-sm border border-slate-200"
                >
                    {tech}
                </span>
                ))}
            </div>

            <a
                href="https://www.loquetlondon.com/sudoku"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
            >
                View Project →
            </a>

            </div>

            <div className="border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition">

            <h3 className="text-xl font-semibold mb-2">
                Personal Portfolio Website
            </h3>

            <p className="text-slate-600 leading-7 mb-6">
                Modern portfolio website built using Next.js, Tailwind CSS,
                and headless WordPress architecture to showcase frontend
                development projects and technical capabilities.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
                {[
                "Next.js",
                "React",
                "Tailwind CSS",
                "WordPress",
                "REST API",
                ].map((tech) => (
                <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 rounded-full text-sm border border-slate-200"
                >
                    {tech}
                </span>
                ))}
            </div>

            <a
                href="https://www.vinodsoba.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
            >
                View Project →
            </a>

            </div>

          </div>

        
        </section>

        {/* Education & Interest Section */}
        <section className="mb-12">

            <h2 className="text-2xl font-semibold mb-6">
                Education
            </h2>

        <div className="border border-slate-200 rounded-2xl p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

            <div>
                <h3 className="text-xl font-semibold">
                BA (Hons) Multimedia & Computer Science
                </h3>

                <p className="text-slate-600 mt-1">
                University of West London
                </p>
            </div>

            <span className="text-sm text-slate-500 mt-2 md:mt-0">
                2006
            </span>

            </div>

        </div>

        </section>

        <section className="mb-12">

            <h2 className="text-2xl font-semibold mb-6">
                Interests
            </h2>

        <p className="text-slate-700 leading-7">
            Passionate about frontend development, ecommerce UX,
            responsive web design, and modern JavaScript frameworks.
            Outside of development, interests include fitness,
            technology, and digital product design.
        </p>

        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-slate-200 text-sm text-slate-500">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <p>
            © 2026 Vinnie Soba
            </p>

            <div className="flex flex-wrap items-center gap-3">

            <a
                href="mailto:vinodsoba@gmail.com"
                className="hover:text-black transition"
            >
                Email
            </a>

            <span>•</span>

            <a
                href="https://github.com/vinodsoba"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
            >
                GitHub
            </a>

            <span>•</span>

            <a
                href="https://www.vinodsoba.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
            >
                Portfolio
            </a>

            </div>

        </div>

        </footer>

      </div>
      
    </main>
  );
}