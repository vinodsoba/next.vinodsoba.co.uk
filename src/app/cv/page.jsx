export const metadata = {
  title: "CV | Vinod Soba",
  description:
    "View the professional CV of Vinod Soba, Front-End Web Developer with experience in React, Next.js, WordPress and Magento.",

    robots: {
    index: true,
    follow: true,
  },
};

export default function CVPage() {
  return (
    <main className="bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-8 py-12 print:px-2 print:py-2 print:text-[12px]">

        {/* Header */}
        <section className="mb-12 print:mb-2">
          <h1 className="text-5xl print:text-4xl font-bold">Vinod Soba</h1>
          <p className="text-xl mt-2 text-slate-600">
            Front End Web Developer
          </p>
          <div className="py-2 flex flex-wrap gap-3 text-sm text-slate-500 items-center">
            <p>Maidenhead, UK</p>
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
          <h2 className="text-2xl print:text-xl font-semibold mb-4">
            Professional Summary
          </h2>

          <p className="leading-7 print:leading-5 text-slate-700">
            Frontend Developer specialising in responsive websites, ecommerce platforms, and modern user experiences across WordPress, Magento, and React-based applications. Experienced working with React, Next.js, JavaScript, WordPress, Magento, Tailwind CSS, and modern frontend workflows including Git and component-based development. Strong commercial background delivering production-ready websites, landing pages, and frontend solutions focused on user experience, performance, SEO, and conversion optimisation.
          </p>
        </section>

        <section className="mb-12 print:mb-2">
        <h2 className="text-2xl print:text-xl font-semibold mb-6 print:mb-2 print:h-1">
            Technical Skills
        </h2>

        <div className="space-y-6 print:mb-10">

            {/* Frontend */}
            <div>
            <h3 className="print:hidden text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                Frontend
            </h3>

            <div className="flex flex-wrap gap-3 print:hidden">
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
                    className="px-4 py-2 bg-slate-100 rounded-full text-sm print:text-md font-medium"
                >
                    {skill}
                </span>
                ))}
            </div>
            </div>

            {/* CMS & Ecommerce */}
            <div>
            <h3 className="print:hidden text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                CMS & Ecommerce
            </h3>

            <div className="flex flex-wrap gap-3 print:hidden">
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
            <h3 className="print:hidden text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                Tools
            </h3>

            <div className="flex flex-wrap gap-3 print:hidden">
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
                <h3 className="print:hidden text-sm font-semibold uppercase text-slate-500 ">
                    Ecommerce & Analytics
                </h3>

                <div className="flex flex-wrap gap-3 print:hidden">
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

        {/* print version */}
        <div className="hidden print:block print:text-[12px] leading-4 text-slate-700">

            <p>
                React • Next.js • JavaScript • HTML5 • CSS3 • Tailwind CSS
            </p>

            <p className="mt-2">
                WordPress • Magento 2 • ACF
            </p>

            <p className="mt-2">
                Git • GitHub • Node.js • Jira • Vagrant
            </p>

            <p className="mt-2">
                GA4 • SEO • CRO • Responsive Design •
                Performance Optimisation • A/B Testing • Ecommerce UX
            </p>

                <h2 className="print:mt-10 text-2xl print:text-xl font-semibold mb-6 print:mb-2">
                    Work Experience
                </h2>

                {/* Print Addison Lee */}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 print:mb-5">
                    <div>
                        <h3 className="text-xl font-semibold">
                            Full Stack Developer
                        </h3>

                        <p className="text-slate-600 print:text-[14px]">
                            Addison Lee
                        </p>
                    </div>

                    <span className="text-sm text-slate-500 mt-2 md:mt-0">
                    Oct 2022 — May 2026
                    </span>
                </div>
                <ul className="hidden print:block space-y-1 text-slate-700 leading-4 list-disc pl-5">

                <li>
                    Developed and maintained responsive websites, landing pages,
                    and custom frontend templates using WordPress, ACF,
                    JavaScript, PHP, HTML, and CSS.
                </li>

                <li>
                    Built reusable frontend components focused on performance,
                    responsive design, UX, and SEO optimisation.
                </li>

                <li>
                    Managed staging and production deployments using Git-based
                    workflows and collaborated with marketing teams and
                    third-party developers to deliver website enhancements
                    and digital campaigns.
                </li>

                <li>
                    Integrated third-party tools including Freshdesk forms,
                    chatbots, and lead-generation functionality while
                    supporting local development environments using
                    Node.js and Vagrant.
                </li>

                </ul>
            {/* Print Y-Wilson */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 print:mt-5 print:mb-5">
                    
                <div>
                    <h3 className="text-xl font-semibold">
                        Front End Developer
                    </h3>

                    <p className="text-slate-600 print:text-[14px]">
                        Y-Wilson
                    </p>
                </div>
                <span className="text-sm text-slate-500 mt-2 md:mt-0">
                    Jul 2022 — Oct 2022 
                </span>

                <p className="text-slate-700 leading-7 print:leading-5 mb-6 print:mb-2 print:mt-5">
                Developed an interactive React-based Sudoku game focused on responsive
                frontend functionality, reusable components, and cross-device usability.
            </p>

            <ul className="space-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 list-disc pl-5">

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
           
            </div>          
            
        </section>
        <section className="mb-12 print:mb-6 print:hidden">
        <h2 className="text-2xl print:text-xl font-semibold mb-6 print:mb-2">
            Work Experience
        </h2>

        <div className="print:border-hidden">
            <div className="mb-12 print:mb-6 border-b border-slate-200 pb-12">

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
                    Oct 2022 — May 2026
                    </span>
                </div>

                <p className="text-slate-700 leading-7 print:leading-5 mb-6 print:mb-2">
                    Working across multiple company websites and digital platforms,
                    developing responsive frontend experiences, landing pages,
                    WordPress templates, and customer-focused web functionality.
                </p>

                <ul className="space-y-2 text-slate-700 leading-6 print:hidden list-disc pl-5">

                <li>
                Developed and maintained responsive websites, landing pages, and custom frontend templates using WordPress, ACF, HTML, CSS, JavaScript, and PHP.
                </li>

                <li>
                Built reusable website components focused on performance, responsive design, user experience, and SEO optimisation.
                </li>

                <li>
                Managed staging and production deployments, implementing Git-based workflows to improve collaboration, code management, and release tracking.
                </li>

                <li>
                Integrated third-party tools including Freshdesk forms and chatbot functionality to support customer engagement and lead generation.
                </li>

                <li>
                Collaborated with marketing teams and third-party developers to deliver digital campaigns, website enhancements, and content updates using Jira-managed workflows.
                </li>

                <li>
                Supported local development environments using Node.js and Vagrant virtual machines.
                </li>

                </ul>

                {/* for print */}
                <ul className="hidden print:block space-y-1 text-slate-700 leading-4 list-disc pl-5">

                <li>
                    Developed and maintained responsive websites, landing pages,
                    and custom frontend templates using WordPress, ACF,
                    JavaScript, PHP, HTML, and CSS.
                </li>

                <li>
                    Built reusable frontend components focused on performance,
                    responsive design, UX, and SEO optimisation.
                </li>

                <li>
                    Managed staging and production deployments using Git-based
                    workflows and collaborated with marketing teams and
                    third-party developers to deliver website enhancements
                    and digital campaigns.
                </li>

                <li>
                    Integrated third-party tools including Freshdesk forms,
                    chatbots, and lead-generation functionality while
                    supporting local development environments using
                    Node.js and Vagrant.
                </li>

                </ul>

            </div>
        </div>
            {/* Y Wilson */}
            <div className="mb-12 print:mb-6 border-b border-slate-200 pb-12">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 print:mt-10">
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

            <p className="text-slate-700 leading-7 print:leading-5 mb-6 print:mb-2">
                Developed an interactive React-based Sudoku game focused on responsive
                frontend functionality, reusable components, and cross-device usability.
            </p>

            <ul className="space-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 list-disc pl-5">

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
            <div className="mb-12 print:mb-6 border-b border-slate-200 pb-12">

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

            <p className="text-slate-700 leading-7 print:leading-5 mb-6 print:mb-2">
                Developed responsive event and campaign web experiences for global
                brands including Gartner, Hewlett Packard, and New Balance.
            </p>

            <ul className="space-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 list-disc pl-5">

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
            <div className="mb-12 print:mb-6 border-b border-slate-200 pb-12">

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

            <p className="text-slate-700 leading-7 print:leading-5 mb-6 print:mb-2">
                Developed and maintained event websites, landing pages, and digital
                campaign assets across multiple brands and content platforms.
            </p>

            <ul className="sspace-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 list-disc pl-5">

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
            <div className="mb-12 print:mb-6 border-b border-slate-200 pb-12">

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

            <p className="text-slate-700 leading-7 print:leading-5 mb-6 print:mb-2">
                Worked on Magento ecommerce development, responsive frontend redesigns,
                and performance optimisation across the company website and digital platforms.
            </p>

            <ul className="space-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 list-disc pl-5">

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
            <div className="mb-12 print:mb-6 border-b border-slate-200 pb-12">

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

            <ul className="space-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 list-disc pl-5">

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
            <div className="mb-12 print:mb-6">

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

            <ul className="space-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 list-disc pl-5">

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
        

        <section className="mb-12 print:mb-6">
        {/* Print Nteractive */}
        <div className="hidden print:block flex flex-col md:flex-row md:items-center md:justify-between mb-10 print:mt-5">
                
            <div>
                <h3 className="text-xl font-semibold">
                    Front End Developer
                </h3>

                <p className="text-slate-600 print:text-[14px]">
                    Nteractive
                </p>
            </div>
            <span className="text-sm text-slate-500 mt-2 md:mt-5">
                Oct 2021 — Jun 2022 
            </span>

            <p className="text-slate-700 leading-7 print:leading-5 mb-6 print:mb-2 print:mt-5">
            Developed responsive event and campaign web experiences for global brands including Gartner, Hewlett Packard, and New Balance.
            </p>

        <ul className="space-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 list-disc pl-5">

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

        {/* Print Ocean Media Group */}
        <div className="hidden print:block flex flex-col md:flex-row md:items-center md:justify-between mb-10 print:mt-5">
                    
            <div>
                <h3 className="text-xl font-semibold">
                    Front End Developer
                </h3>

                <p className="text-slate-600 print:text-[14px]">
                    Ocean Media Group
                </p>
            </div>
            <span className="text-sm text-slate-500 mt-2 md:mt-0">
                Oct 2019 — Sep 2021 
            </span>

            <p className="text-slate-700 leading-7 print:leading-5 mb-6 print:mb-2 print:mt-5">
                Developed and maintained event websites, landing pages, and digital
                campaign assets across multiple brands and content platforms.
            </p>

            <ul className="space-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 list-disc pl-5">
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

        {/* Print St John's Laboratory Ltd */}
        <div className="hidden print:block flex flex-col md:flex-row md:items-center md:justify-between mb-10 print:mt-5">
                    
            <div>
                <h3 className="text-xl font-semibold">
                   Full Stack Developer
                </h3>

                <p className="text-slate-600 print:text-[14px]">
                    St John’s Laboratory Ltd
                </p>
            </div>
            <span className="text-sm text-slate-500 mt-2 md:mt-0">
                Sep 2018 — Sep 2019 
            </span>

            <p className="text-slate-700 leading-7 print:leading-5 mb-6 print:mb-2 print:mt-5">
                Worked on Magento ecommerce development, responsive frontend redesigns, and performance optimisation across the company website and digital platforms.
            </p>

            <ul className="space-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 list-disc pl-5">
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

        {/* Print Registry Trust */}
        <div className="hidden print:block flex flex-col md:flex-row md:items-center md:justify-between mb-10 print:mt-5">
                    
            <div>
                <h3 className="text-xl font-semibold">
                   Senior Full Stack Developer
                </h3>

                <p className="text-slate-600 print:text-[14px]">
                    Registry Trust Ltd
                </p>
            </div>
            <span className="text-sm text-slate-500 mt-2 md:mt-0">
                Nov 2013 — Aug 2018 
            </span>

            <ul className="space-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 list-disc pl-5 print:mt-5">
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
        
        {/* Print Regus */}
        <div className="hidden print:block flex flex-col md:flex-row md:items-center md:justify-between mb-10 print:mt-5">
                    
            <div>
                <h3 className="text-xl font-semibold">
                   Web Developer
                </h3>

                <p className="text-slate-600 print:text-[14px]">
                    Regus
                </p>
            </div>
            <span className="text-sm text-slate-500 mt-2 md:mt-0">
                Mar 2011 — Oct 2013 
            </span>

            <ul className="space-y-2 text-slate-700 leading-6 print:space-y-1 print:leading-4 print:mt-5 list-disc pl-5">
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
        
        <h2 className="text-2xl print:text-xl font-semibold mb-6 print:mb-2">
            Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 print:grid-cols-2 gap-6 gap-6 print:gap-3 print:p-2 print:gap-4">

            {/* card */}

            <div className="border border-slate-200 rounded-2xl p-6 print:p-2 break-inside-avoid h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300 print:p-4">

            <h3 className="text-xl font-semibold mb-2">
                Addison Lee Digital Platform
            </h3>

            <p className="text-slate-600 leading-6 mb-4 print:text-[10px] print:leading-3">
                Frontend development and website management across multiple
                company websites, landing pages, and customer-facing digital
                experiences.
            </p>

            <ul className="space-y-2 text-slate-700 leading-6 list-disc pl-5 mb-6 print:mb-2 print:hidden">

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

            <div className="flex flex-wrap gap-3 mb-6 print:mb-2 print:hidden">
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

            <div className="mt-auto flex justify-between">
                <span className="mb-2">https://www.addisonlee.com</span>
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

            <div className="border border-slate-200 rounded-2xl p-6 print:p-3 break-inside-avoid h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300 print:p-2">

            <h3 className="text-xl font-semibold mb-2">
                Ocean Media Event Platforms
            </h3>

            <p className="text-slate-600 leading-6 mb-4 print:text-[10px] print:leading-3">
                Frontend development and digital campaign work across multiple
                event and media brands, delivering responsive websites,
                landing pages, and marketing-focused user experiences.
            </p>

            <ul className="space-y-2 text-slate-700 leading-6 list-disc pl-5 mb-6 print:mb-2 print:hidden">

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

            <div className="flex flex-wrap gap-3 mb-6 print:mb-2 print:hidden">
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

            <div className="mt-auto flex justify-between">
                <span className="mb-2">https://nationalweddingshow.co.uk</span>
                <a
                href="https://www.nationalweddingshow.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
                >
                View Website →
                </a>
            </div>

            </div>

            <div className="border border-slate-200 rounded-2xl p-6 print:p-2 break-inside-avoid hover:border-slate-300 transition print:p-2">

            <div className="flex items-start justify-between mb-4">

                <div>
                <h3 className="text-xl font-semibold mb-2">
                    BeautyBop Ecommerce Platform
                </h3>

                <p className="text-slate-600 leading-6 mb-4 print:text-[10px] print:leading-3">
                    Magento 2 ecommerce platform focused on frontend UX,
                    SEO optimisation, responsive design, and ecommerce
                    performance improvements.
                </p>
                </div>

            </div>

            <ul className="space-y-2 text-slate-700 leading-6 list-disc pl-5 mb-6 print:mb-2 print:hidden">

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

            <div className="flex flex-wrap gap-3 mb-6 print:mb-2 print:hidden">
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
               <div className="mt-auto flex justify-between">
                <span className="mb-2">https://www.beautybop.co.uk</span>
               
                <a
                href="https://www.beautybop.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
                >
                    View Website →
                </a>

               </div>            

            </div>

            <div className="border border-slate-200 rounded-2xl p-6 print:p-2 break-inside-avoid hover:border-slate-300 transition print:p-2">

            <h3 className="text-xl font-semibold mb-2">
                St Johns Laboratory
            </h3>

            <p className="text-slate-600 leading-6 mb-4 print:text-[10px] print:leading-3">
                Worked on Magento ecommerce development, responsive frontend redesigns, and performance optimisation across the company website and digital platforms.
            </p>

            <ul className="space-y-2 text-slate-700 leading-6 list-disc pl-5 mb-6 print:mb-2 print:hidden">

                <li>
                Redesigned and developed responsive frontend pages including the homepage, antibody validation pages, and blog layouts
                </li>

                <li>
                Supported the migration of the company ecommerce platform from Magento 1.9 and helped establish staging environments for testing and deployment workflows.
                </li>

                <li>
                Analysed, debugged, and tested frontend and backend functionality across staging and production environments
                </li>

            </ul>

            <div className="flex flex-wrap gap-3 mb-6 print:mb-2 print:hidden">
                {[
                "Magento 1.9 & 2",
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
            <div className="mt-auto flex justify-between">
            <span className="mb-2">https://stjohnslabs.com</span>
            <a
                href="https://stjohnslabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
            >
                View Website →
            </a>

            </div>

            </div>

            <div className="border border-slate-200 rounded-2xl p-6 print:p-2 break-inside-avoid hover:border-slate-300 transition print:p-2">

            <h3 className="text-xl font-semibold mb-2">
                Personal Portfolio Website
            </h3>

            <p className="text-slate-600 leading-6 mb-4 print:text-[10px] print:leading-3">
                Modern portfolio website built using Next.js, Tailwind CSS,
                and headless WordPress architecture to showcase frontend
                development projects and technical capabilities.
            </p>

            <div className="flex flex-wrap gap-3 mb-6 print:mb-2 print:hidden">
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
             <div className="mt-auto flex justify-between">
            <span className="mb-2">https://www.vinodsoba.co.uk</span>
            <a
                href="https://www.vinodsoba.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
            >
                View Website →
            </a>
            </div>
            </div>

          </div>

        
        </section>

        {/* Education & Interest Section */}
        <section className="mb-12 print:mb-6">

            <h2 className="text-2xl print:text-xl font-semibold mb-6 print:mb-2">
                Education
            </h2>

        <div className="border border-slate-200 rounded-2xl p-6 print:p-2 break-inside-avoid print:p-2">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

            <div>
                <h3 className="text-xl font-semibold">
                BA (Hons) Multimedia & Computer Science
                </h3>

                <p className="text-slate-600 mt-1">
                University of West London
                </p>
            </div>

            </div>

        </div>

        </section>

        <section className="mb-12 print:mb-6 print:hidden">

            <h2 className="text-2xl print:text-xl font-semibold mb-6 print:mb-2">
                Interests
            </h2>

        <p className="text-slate-700 leading-7 print:text-[10px]print:leading-3">
            Passionate about frontend development, ecommerce UX,
            responsive web design, and modern JavaScript frameworks.
            Outside of development, interests include fitness,
            technology, and digital product design.
        </p>

        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-slate-200 text-sm text-slate-500 print:hidden">

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