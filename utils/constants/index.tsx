import { CiLocationOn } from "react-icons/ci";
import { FaDropbox } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaX } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { TbMailBitcoin } from "react-icons/tb";

export const MarginX = {
  base: "3%",
  sm: "5%",
  md: "6%",
  lg: "8%",
  xl: "10%",
};

export const socialIcons = [
  {
    link: "https://www.facebook.com/jmassociateske",
    icon: <FaFacebookF />,
    color: "#3b5998",
  },
  {
    link: "https://www.instagram.com/jmassociatesllp",
    icon: <FaInstagram />,
    color: "#c13584",
  },
  {
    link: "https://www.linkedin.com/company/jm-associates-ke/",
    icon: <FaLinkedinIn />,
    color: "linear-gradient(90deg, #0077b5 0%, #0077b5 50%, #0077b5 100%)",
  },
  {
    link: "https://x.com/JMAssociatesLLP",
    icon: <FaX />,
    color: "#000000",
  },
];

export const homectas = [
  {
    icon: <CiLocationOn />,
    text: "FIND US",
    desc: "Westpark Towers",
  },
  {
    icon: <FiPhone />,
    text: "CALL US",
    desc: "(+254) 733 818 835",
  },
];

export const HomeLinks = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/about-us",
    text: "About Us",
  },
  {
    link: "/services",
    text: "Services",
  },
  {
    link: "/blogs",
    text: "Insights",
  },
  {
    link: "/careers",
    text: "Careers",
  },
  {
    link: "/contact-us",
    text: "Contact Us",
  },
];

export const contactsData = [
  {
    label: "info@jmassociates.co.ke",
    title: "Email Address",
    icon: <TbMailBitcoin />,
    link: `mailto:info@jmassociates.co.ke`,
    bg: "red.500",
    color: "black",
  },
  {
    label: "+254 733 818 835",
    title: "Phone Number",
    icon: <FiPhone />,
    link: `tel:+254733818835`,
    bg: "red.500",
    color: "black",
  },
  {
    label: "Westpark Towers, 4th Floor, Westlands, Nairobi",
    title: "Location",
    icon: <CiLocationOn />,
    link: `https://goo.gl/maps/6K3xk9vY7G1gJ5nV6`,
    bg: "red.500",
    color: "black",
  },
  {
    label: "23598 - 00625",
    title: "P.O Box",
    icon: <FaDropbox />,
    link: `https://jmassociates.co.ke`,
    bg: "red.500",
    color: "black",
  },
];

export const CareersData = [
  { id: 1, title: "Software Engineer", location: "Remote" },
  {
    id: 2,
    title: "Marketing Specialist",
    location: "Nairobi, Kenya",
  },
  { id: 3, title: "HR Manager", location: "New York, USA" },
];

export const ServiceTabs = [
  {
    id: 1,
    name: "Accounting",
    content: `Bookkeeping and accounting is the backbone of proper financial management. Every business needs to have proper financial records to make informed decisions and know how the business is performing. We do not just keep a record of your finances and produce reports; we tell you what your numbers are saying. We help you reach your goals.
    
    **Outsourced Accounting Services**
    Our outsourced accounting services have been designed to be a powerhouse that integrates seamlessly into your business systems. We provide you with:
      
    i. A complete accounting department that provides end-to-end financial services;
    ii. Time-tested accounting processes to streamline your business;
    iii. Robust accounting systems and reporting tools to keep you updated on your finances;
    iv. An experienced virtual CFO for expert financial advice and strategies;
    v. Up-to-date reports and regular meetings led by a CFO to guide you in achieving business goals.
    
    **Our Full Range of Accounting Services Includes:**
    1. General bookkeeping and accounting services;
    2. Carrying out various accounts control reconciliations;
    3. Back-to-back accounting to statutory reporting;
    4. Management accounting and operations;
    5. Monthly payroll preparation and returns;
    6. Advisory on deployment of accounting software;
    7. Streamlining and improving bookkeeping processes;
    8. Accounts as a shared service for companies with multiple offices;
    9. Complete fixed asset accounting, policy reconciliations, and recording;
    10. Full inventory cycle processes, including inventory management and reconciliations.`,
    image: "/Home/10-Years.jpg",
  },
  {
    id: 2,
    name: "Taxation",
    content: `**Tax Health Check**
    A tax health check or tax audit is a methodological approach that we adopt in reviewing financial transactions with an objective of advising on the nature and extent of compliance as far as tax is concerned.
    
    In the review, we observe areas that organizations can confront to minimize tax exposures. At the end of the review, we help organizations create a formidable tax plan that minimizes tax risks, maximizes tax opportunities, and refines tax objectives and goals.
    
    **Key Areas of Focus:**
    - Areas of tax risks
    - Areas of tax opportunities yet to be utilized
    - Measures available to the company for tax planning purposes
    
    **Tax Compliance**
    Our vast experience enables us to manage the tax affairs of corporate entities and individuals across industries.
    
    **Our Services Include:**
    - Computation and submission of statutory tax returns for companies and individuals;
    - Reviewing and submitting annual PAYE returns;
    - Various tax computations and filings, including VAT, Withholding Tax, and Excise Duty;
    - Instalment tax computations and advisory on due dates;
    - Computing and advising on year-end corporate taxes;
    - Reviewing accounting systems to ensure tax compliance.
    
    **Property Tax**
    The property sector plays a vital role in the economy. Numerous developments in tax rules affect residential and commercial property, necessitating effective tax management.
    
    **We Provide Property Tax Advice for:**
    - Acquisition, lease, and holding property as an investment;
    - Refinancing, restructuring, and development;
    - Sale of property and related tax implications.
    
    **Transfer Pricing**
    With businesses becoming global, related party transactions must be priced at arm’s length. We assist in identifying related transactions and conducting benchmarking analysis to ensure compliance with KRA and OECD guidelines.
    
    **International Taxation**
    We help businesses align international tax planning with their business strategies. Leveraging our membership with Antea International, an association of over 70 leading firms across 80 countries, we provide global tax solutions.
    
    **KRA Representations**
    We assist clients in navigating tax compliance checks and audits seamlessly, ensuring minimal business disruptions.
    
    **Tax Trainings and Seminars**
    We offer tailored training on evolving tax regulations, providing theoretical and practical solutions for businesses.
    
    **Other Tax Services:**
    - Assistance in obtaining tax exemption certificates;
    - Acting as tax agents and handling KRA queries;
    - Tax planning advisories;
    - Business and individual tax registration;
    - VAT audits and refund facilitation;
    - Filing monthly tax returns (PAYE, rental income tax, VAT, WHT, etc.).`,
    image: "/Home/about.jpeg",
  },
  {
    id: 3,
    name: "Forensic Audit & Assurance",
    content: `**Forensic Audit & Assurance**
    Our forensic audit and assurance services help businesses detect fraud, ensure regulatory compliance, and enhance financial transparency. We conduct thorough investigations to identify and mitigate risks.
    
    **Key Services Include:**
    - Fraud risk assessments and forensic investigations;
    - Regulatory compliance and internal control reviews;
    - Litigation support and dispute resolution;
    - Financial reporting assurance and forensic data analysis;
    - Corporate governance assessments.
    
    We leverage advanced forensic methodologies and technology to provide accurate, timely, and actionable insights for businesses, ensuring they safeguard their financial interests and maintain compliance with regulatory standards.`,
    image: "/Home/Consultancy.jpg",
  },
  {
    id: 4,
    name: "Asset and Inventory Management",
    content: `**Fixed Assets Management**
    Tangible and intangible assets are invaluable resources in any business. Proper management of these assets is crucial to maintaining their value and ensuring compliance.
    
    **Key Services Include:**
    - Physical verification of assets against the Fixed Asset Register;
    - Assessing the value of fixed assets as recorded in company accounts;
    - Reconciling additions and disposals;
    - Ensuring correct depreciation rates per asset class;
    - Differentiating leased and owned assets;
    - Ensuring alignment between the register, ledgers, and financials;
    - Tagging and tracking movable assets;
    - Evaluating asset status and usage.`,
    image: "/Home/Leverage.png",
  },
  {
    id: 5,
    name: "Outsourced Accounting Services",
    content: `Through Book keeping and accounting is the backbone of proper financial management. Every business need to have proper books financial records to be able to make informed decision and know how the business is fairing on. We do not just keep a record of your finances and produce for you reports, we tell you what your numbers are saying. We help you to reach your goals.

    We assist companies to deal with the day to day operations as well as its long term goals and targets. 
    **Outsourced Accounting Services**:

   i.A complete accounting department that will provide end to end financial services for your business;
  ii.Time tested accounting processes that will streamline your business in no time;
  iii. Robust accounting systems and reporting tools that will enable you stay abreast with your finances at all times;
  iv. An experienced virtual Chief Finance Officer to expert advice on key financial indicators and financial strategies;
   v. Up-to date reports and regular meetings with your finance team lead by a CFO who updates you on how your business is fairing and what you should do to achieve your business goals


      The Full Range of Accounting services that we offer include:

      1. General bookkeeping and accounting services;
      2. Carrying out various accounts control reconciliations;
      3. Back to back accounting to statutory reporting;
      4. Management Accounting and operating;
      5. Monthly payroll preparation and returns;
      6. Advisory on deployment of Accounting software’s;
      7. Streamlining and improving bookkeeping and accounting processes;
      8. Accounts as a shared services for companies with multiple offices across the region;
      9. Complete fixed asset accounting including procedures , policies reconciliations, recording and reconciliation;
      10. Full inventory cycle process including inventory management procedures and processes reconciliations and recording.

      **The Virtual Chief Finance Officer (CFO)**

      You may be comfortable with your accountant or book keeper. A CFO is however a vital part of any growing company.

      The insights your CFO gives you can help you grow your business more, and employ prudent financial management strategies.

      A CFO help you in:

      1. Providing the leadership role in the financial department;
      2. Analyzing you cash flow, cost controls, and expenses to guide business leaders;
      3. Analyzing financial statements to pinpoint potential weak areas;
      4. Establish and maintain appropriate internal control safeguards;
      5. Assisting in developing, directing and implementation of strategic goals of the company leader;
      6. Cash flow management and forecasting;
      7. Budget creation and analysis;
      8. Break-even and cost control;
      9. Debt Restructuring and reduction;
      10. Shareholder communications;
      11. Resource management

      We advise on company legal structures, sound corporate practices and other compliance matters. This enables the organizations to develop and pursue their strategic objectives.`,
    image: "/Home/our-partners.jpg",
  },
  {
    id: 6,
    name: "Corporate Finance Service",
    content: `Through Corporate Consulting, JM Associates looks at the companies’ operations where we undertake assignments that enable a company to maximize profits and minimize costs

    We assist companies to deal with the day to day operations as well as its long term goals and targets. 
    **Our service delivery focuses on**:

    1. The resources available to your firm;
    2. The capital structure of the corporation;
    3. Strategies to be taken by business managers to increase value; and
    4. Analytical allocation of your company’s resources.

      We advise on company legal structures, sound corporate practices and other compliance matters. This enables the organizations to develop and pursue their strategic objectives.`,
    image: "/Home/co.jpeg",
  },
  {
    id: 7,
    name: "Enterprises Risk Management",
    content: "Find answers to common questions...",
    image: "/Home/10-Years.jpg",
  },
];

export const newsArticles = [
  {
    slug: "digital-prescription",
    title: "A digital prescription for the pharma",
    date: "May 26, 2017",
    image: "/home/10-Years.jpg",
    content: "Full content for digital prescription blog...",
    excerpt:
      "The pharmaceutical industry is undergoing a digital transformation, with new technologies improving efficiency and patient outcomes.",
  },
  {
    slug: "digital-lending",
    title: "Retail banks wake up to digital lending",
    date: "May 26, 2017",
    image: "/home/consultancy.jpg",
    content: "Full content for digital lending blog...",
    excerpt:
      "Retail banks are recognizing the importance of digital lending in enhancing customer experience and streamlining operations.",
  },
  {
    slug: "pro-bono",
    title: "Seven weeks working ‘pro bono’",
    date: "January 22, 2016",
    image: "home/leverage.png",
    content: "Full content for pro bono blog...",
    excerpt:
      "A team of consultants spent seven weeks working pro bono to help a charity improve its operations and better serve its community.",
  },
];
