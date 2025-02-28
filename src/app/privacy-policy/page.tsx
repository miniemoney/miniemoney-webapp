"use client";

import Navbar from "@/layout/navbar";
import Section from "@/layout/section";
import Navbars from "../../../public/terms_of_service.jpeg";
import Footer from "@/layout/footer";

const PrivacyPolicy = () => {
  const today = new Date();

  const thisYear = today.getFullYear();
  return (
    <div className="relative w-screen">
      <Navbar />
      <div className="mt-[84px]">
        <Section className="px-5 py-[80px] bg-white flex flex-col gap-[48px]">
          <div className="w-full p-5 lg:p-10 rounded-2xl flex flex-col gap-4 lg:gap-6 border relative overflow-hidden">
            <img
              src={Navbars.src}
              alt=""
              className="w-full h-inherit top-0 left-0 absolute -translate-y-1/4 custom"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(237,249,255,0.20)] to-[rgba(237,249,255,0.20)]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#EDF9FF] via-[rgba(237,249,255,0.60)] to-[rgba(237,249,255,0.60)] opacity-60"></div>
            <div className="flex flex-col gap-2 z-10">
              <p className="font-instrument_sans -tracking-[0.96px] font-[600] text-3xl lg:text-[48px] text-grey-900">
                Privacy policy
              </p>
              <p className="text-gray-600 font-nunito text-xl">
                Kindly read our privacy policy and our we protect our valuable
                users.
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="font-nunito z-10 text-gray-600 text-sm lg:text-lg ">
                Effective Date: 01 March {thisYear}
              </p>
              <p className="font-nunito z-10 text-gray-600 text-sm lg:text-lg ">
                Last updated: 01 March {thisYear}
              </p>
            </div>
          </div>
        </Section>
        <Section className="px-5 pb-[80px] bg-white ">
          <div className="flex flex-col gap-5 lg:gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                General Information
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  {`This privacy policy explains how we collect, use, disclose and protect your information, including any non-public personal information. This policy applies to information we collect when you use our website and mobile application (collectively, "Services") or otherwise interact with us as described below. This privacy policy may be changed from time to time. If we make changes, we will notify you by revising the date at the top of this policy, and in some cases, we may provide you with additional notice (such as by adding a statement to the homepages of our website or mobile application or by sending you an email notification).`}
                </p>
                <p className="text-gray-600">
                  {`We encourage you to review the privacy policy whenever you interact with us to stay informed about our information practices and the ways you can help protect your privacy. This privacy policy applies to the Services provided by [MinieMoney INC] (“we” or “us”) and applies to consumer users (individually referred to as "you") of our websites, applications, and other online services to which this Privacy Policy is posted. This Privacy Policy is part of our Terms of Use. If you do not agree with every provision of this Privacy Policy and our Terms of Use, you may not access or use our Services.`}
                </p>
                <p className="text-gray-600">
                  {`We are committed to the protection of your privacy while you use our website, services, and applications. You may browse parts of this Website without providing any information about yourself and without accepting cookies. In that case, it’s unlikely we’ll possess and process any information relating to you."`}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Application of This Privacy Policy
              </h3>
              <p className="text-gray-600">
                {`This Privacy Policy applies to your use of (regardless of means of access) our Services. You may access or use our Services through a desktop, laptop, mobile phone, tablet, or other consumer electronic device (each, a "Device").`}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Modifications and Revisions
              </h3>
              <p className="text-gray-600">
                We reserve the right to modify, revise, or otherwise amend this
                Privacy Policy at any time and in any manner. If we do so,
                however, we will notify you and obtain your consent to the
                change in processing. Unless we specifically obtain your
                consent, any changes to the Privacy Policy will only impact the
                information collected on or after the date of the change. It is
                also your responsibility to periodically check this page for any
                such modification, revision, or amendment.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Personal Data We Receive From You
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  When you visit our Services, we may collect the following
                  personal information from or about you:
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Contact Information:
                  </span>{" "}
                  Your name, phone number, postal address, or e-mail address.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Account/Registration Information:
                  </span>{" "}
                  Your full name, address, email address, telephone number,
                  occupation, means of identification, Bank Verification Number
                  (BVN) [for Nigerian Users], photograph, bank account number,
                  address, and registration number of your business/company,
                  addresses and telephone numbers of the directors/guarantors of
                  your business/company, name and contact details of the
                  corporate buyer, account number of the business/company and
                  Directors/Guarantors, business sector.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Payment Information:
                  </span>{" "}
                  Your bank account number, expiration date, account number, and
                  Guarantor details.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Online Identifiers:
                  </span>{" "}
                  IP address, advertising ID, unique device ID, and other
                  information about your device, and internal and third-party
                  IDs that have been assigned to you.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Location Information:
                  </span>{" "}
                  Information about your precise location that we collect from
                  your device (collected in limited circumstances) or
                  information about your general location derived from your IP
                  address.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Internet Activity Information:
                  </span>{" "}
                  Information about your use of our Services, your interactions
                  with the e-mails we send to you, and your activities on other
                  websites you visit, including the web pages, content, and
                  advertisements you view and links you click on, and whether
                  you open, forward, or click the links in e-mails we send to
                  you; your browsing history; and social media you use,
                  including the “shares” and “likes” you make on a social media
                  platform that is connected to the Services.
                </p>
                <p className="text-gray-600">
                  Depending on how you use our website, services, and
                  applications, you will be subject to different types of
                  Personal Data collected and different manners of collection:
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Registered users:
                  </span>{" "}
                  You, as a user of our website, services, and applications, may
                  be asked to register to use our website, services, and
                  applications in a legal manner. During the process of your
                  registration, we will collect some of the following Personal
                  Data from you through your voluntary disclosure. Personal Data
                  may be asked for concerning:
                </p>
                <ul className="list-inside list-none text-gray-600">
                  <li>a. Interaction with our representatives in any way</li>
                  <li>
                    b. receiving notifications by text message or email about
                    marketing
                  </li>
                  <li>c. receiving general emails from us</li>
                </ul>
                <p className="text-gray-600">
                  By undergoing the registration process, you consent to us
                  collecting your Personal Data, including the Personal Data
                  described in this clause, as well as storing, using, or
                  disclosing your Personal Data under this Privacy Policy.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Unregistered users:
                  </span>{" "}
                  {`If you are a passive user of our website, or services, and do
                  not register at all, you may still be subject to certain
                  passive data collection ("Passive Data Collection"). Such
                  Passive Data Collection may include through cookies, as
                  described below, IP address information, location information,
                  and certain browser data, such as history and/or session
                  information.`}
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">All users:</span>{" "}
                  The Passive Data Collection that applies to Unregistered users
                  shall also apply to all other users and/or visitors of our use
                  our website, services, and applications.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Related Entities:
                  </span>{" "}
                  We may share your Personal Data, including Personal Data that
                  identifies you personally, with any of our parent companies,
                  subsidiary companies, affiliates, or other trusted related
                  entities. However, we only share your Personal Data with a
                  trusted related entity if that entity agrees to Our privacy
                  standards as set out in this Privacy Policy and to treat your
                  Personal Data in the same manner that we do.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Email Marketing:
                  </span>{" "}
                  You may be asked to provide certain Personal Data, such as
                  your name and email address, to receive email marketing
                  communications. This information will only be obtained through
                  your voluntary disclosure and you will be asked to
                  affirmatively opt-in to email marketing communications.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    User Experience:
                  </span>{" "}
                  From time to time we may request information from you to
                  assist us in improving our website, services, and
                  applications, such as demographic information or your
                  particular preferences.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Personal Data We Receive Automatically
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">Cookies:</span> We
                  may collect information from you through automatic tracking
                  systems (such as information about your browsing preferences)
                  as well as through information that you volunteer to us (such
                  as information that you provide during a registration process
                  or at other times while using our website, services, and
                  applications as described above). For example, we use cookies
                  to make your browsing experience easier and more intuitive:
                  cookies are small strings of text used to store some
                  information that may concern the user, his or her preferences,
                  or the device they are using to access the internet (such as a
                  computer, tablet, or mobile phone). Cookies are mainly used to
                  adapt the operation of the site to your expectations, offering
                  a more personalized browsing experience and memorizing the
                  choices you made previously. A cookie consists of a reduced
                  set of data transferred to your browser from a web server and
                  it can only be read by the server that made the transfer. This
                  is not executable code and does not transmit viruses. Cookies
                  do not record or store any Personal Data. If you want, you can
                  prevent the use of cookies, but then you may not be able to
                  use our website, services, and applications as we intend. To
                  proceed without changing the options related to cookies,
                  simply continue to use our website, services, and
                  applications.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Technical cookies:
                  </span>{" "}
                  {`Technical cookies, which can also sometimes be called HTML
                  cookies, are used for navigation and to facilitate your access
                  to and use of the site. They are necessary for the
                  transmission of communications on the network or to supply
                  services requested by you. The use of technical cookies allows
                  the safe and efficient use of the site. You can manage or
                  request the general deactivation or cancelation of cookies
                  through your browser. If you do this though, please be advised
                  this action might slow down or prevent access to some parts of
                  the site. Cookies may also be retransmitted by an analytics or
                  statistics provider to collect aggregated information on the
                  number of users and how they visit our website, services, and
                  applications. These are also considered technical cookies when
                  they operate as described. Temporary session cookies are
                  deleted automatically at the end of the browsing session -
                  these are mostly used to identify you and ensure that you
                  don't have to log in each time - whereas permanent cookies
                  remain active longer than just one particular session.`}
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Third-party cookies:
                  </span>{" "}
                  We may also utilize third-party cookies, which are cookies
                  sent by a third party to your computer. Permanent cookies are
                  often third-party cookies. The majority of third-party cookies
                  consist of tracking cookies used to identify online behavior,
                  understand interests and then customize advertising for users.
                  Third-party analytical cookies may also be installed. They are
                  sent from the domains of the aforementioned third parties
                  external to the site. Third-party analytical cookies are used
                  to detect information on user behavior on our website,
                  services, and applications. This takes place anonymously, to
                  monitor the performance and improve the usability of the site.
                  Third-party profiling cookies are used to create profiles
                  relating to users, and to propose advertising in line with the
                  choices expressed by the users themselves.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Profilling cookies:
                  </span>{" "}
                  {`We may also use profiling cookies, which are those that create
                  profiles related to the user and are used to send advertising
                  to the user's browser. When these types of cookies are used,
                  we will receive your explicit consent. To learn more about
                  cookies, you may wish to visit: www.allaboutcookies.org or
                  www.google.com/policies/technologies/cookies/.`}
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Support in configuring your browser:
                  </span>{" "}
                  You can manage cookies through the settings of your browser on
                  your device. However, deleting cookies from your browser may
                  remove the preferences you have set for using our website,
                  services, and applications.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">Log Data:</span>{" "}
                  Like all websites and mobile applications, our website,
                  services, and applications also make use of log files that
                  store automatic information collected during user visits. The
                  aforementioned information is processed in an automated form
                  and collected in an exclusively aggregated manner to verify
                  the correct functioning of the site, and for security reasons.
                  For security purposes (spam filters, firewalls, virus
                  detection), the automatically recorded data may also possibly
                  include Personal Data such as IP address, which could be used,
                  under applicable laws, to block attempts at the damage to our
                  website, services, and applications or damage to other users,
                  or in the case of harmful activities or crime. Such data are
                  never used for the identification or profiling of the user,
                  but only for the protection of our website, services, and
                  applications and our users.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Third Parties
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  {`We may utilize third-party service providers ("Third-Party
                  Service Providers"), from time to time or all the time, to
                  help us with our website, services, and applications and to
                  help serve you.`}
                </p>
                <p className="text-gray-600">
                  We may use Third-Party Service Providers to assist with
                  information storage (such as cloud storage). We may provide
                  some of your Personal Data to Third-Party Service Providers to
                  help us track usage data, such as referral websites, dates and
                  times of page requests, etc.
                </p>
                <p className="text-gray-600">
                  We use this information to understand patterns of usage of and
                  to improve our website, services, and applications. We may use
                  Third-Party Service Providers to host our website, services,
                  and applications. In this instance, the Third-Party Service
                  Provider will have access to your Personal Data. We may allow
                  third parties to advertise on our website, services, and
                  applications.
                </p>
                <p className="text-gray-600">
                  {`These third parties may use cookies in connection with their
                  advertisements (see the "Cookies" clause in this Privacy
                  Policy). Some of our Third-Party Service Providers may be
                  located outside of the United Kingdom [UK] and may not be
                  subject to UK privacy laws. We only share your Personal Data
                  with a Third-Party Service Provider if that provider agrees to
                  our privacy standards as set out in this Privacy Policy. Your
                  Personal Data will not be sold or otherwise transferred to
                  other third parties without your approval.`}
                </p>
                <p className="text-gray-600">
                  Notwithstanding the other provisions of this Privacy Policy,
                  we may provide your Personal Data to a third party or third
                  parties to protect the rights, property, or safety, of us, our
                  customers, or third parties, or as otherwise required by law
                  We will not knowingly share your Personal Data with any third
                  parties other than under this Privacy Policy. If your Personal
                  Data might be provided to a third party in a manner that is
                  other than as explained in this Privacy Policy, you will be
                  notified. You will also have the opportunity to request that
                  we not share that information. In general, you may request
                  that we do not share your Personal Data with third parties.
                  Please contact us via email, if so. Please be advised that you
                  may lose access to certain services that we rely on
                  third-party providers for.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Communications
              </h3>
              <p className="text-gray-600">
                We will get your express opt-in consent before we share your
                personal data with any company outside [MinieMoney INC] for
                marketing purposes. If you opt-in to receive marketing from
                manufacturers, we recommend that you read their privacy policy
                to see how they will use your data and how to alter your
                marketing preferences with them should you wish to in the
                future.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Transfers and Disclosures
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  In the event of a sale, merger, consolidation, change in
                  control, transfer of substantial assets, reorganization, or
                  liquidation, we may transfer, sell, or assign to third parties
                  information concerning your relationship with us, including
                  without limitation, Personal Information that you provide and
                  other information concerning your relationship with us.
                </p>
                <p className="text-gray-600">
                  We may transfer your Personal Data to third parties under
                  confidentiality obligations when required for the performance
                  of any service in relation to the Services we offer on our
                  Site.
                </p>
                <p className="text-gray-600">
                  In any event, where we allow other parties to use Personal
                  Data we hold about you, those parties are bound by strict
                  contractual provisions with us and only have access to
                  personal data needed to perform their functions and may not
                  use it for other purposes. Further, they must process the
                  personal data in accordance with this Privacy Policy.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Storage of Personal Data
              </h3>
              <p className="text-gray-600">
                We use secure physical and digital systems to store your
                Personal Data when appropriate. We ensure that your Personal
                Data is protected against unauthorized access, disclosure, or
                destruction. Please note, however, that no system involving the
                transmission of information via the internet, or the electronic
                storage of data, is completely secure. However, we take the
                protection and storage of your Personal Data very seriously. We
                take all reasonable steps to protect your Personal Data.
                Personal Data is stored throughout your relationship with us. We
                delete your Personal Data upon request for cancelation of your
                account or other general requests for the deletion of data. In
                the event of a breach of your Personal Data, you will be
                notified in a reasonable time frame, but in no event later than
                two weeks, and we will follow all applicable laws regarding such
                breach.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Use of Personal Data
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  We primarily use your Personal Data to help us provide a
                  better experience for you on our website, services, and
                  applications and to provide you with the services and/or
                  information you may have requested, such as the use of our
                  website, services, and applications. Information that does not
                  identify you personally, but that may assist in providing us
                  with broad overviews of our customer base, will be used for
                  market research or marketing efforts. Such information may
                  include but is not limited to, interests based on your
                  cookies. Personal Data that may be considered identifying may
                  be used for the following:
                </p>
                <ul className="list-inside list-none text-gray-600">
                  <li>a. Improving your personal user experience.</li>
                  <li>
                    b. Communicating with you about your user account with us.
                  </li>
                  <li>
                    c. Marketing and advertising to you, including via email.
                  </li>
                  <li>
                    d. Fulfill your requests for services and information
                    (including sending you newsletters via e-mail or postal
                    mail).
                  </li>
                  <li>e. Providing customer service to you.</li>
                  <li>
                    f. Verifying your identity for the purpose of applicable
                    credit checks;
                  </li>
                  <li>
                    g. Advising you about updates to our website, services, and
                    applications or related Items.
                  </li>
                  <li>
                    h. We may monitor and record communications with you
                    (including phone conversations and emails) for quality
                    assurance and compliance. Before doing that, we will always
                    tell you of our intentions and of the specific purpose of
                    making the recording.
                  </li>
                  <li>
                    i. Understand trends in how the visitors to our Services
                    interact with the ads, content, and features on our Services
                    (e.g. your behavior on our Services may be included in a
                    general report about whether people prefer video content
                    over written content on our Services).
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Disclosure of Personal Data
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  Although our policy is to maintain the privacy of your
                  Personal Data as described herein, we may disclose your
                  Personal Data if we believe that it is reasonable to do so in
                  certain cases, at our sole and exclusive discretion. Such
                  cases may include, but are not limited to:
                </p>
                <ul className="list-inside list-none text-gray-600">
                  <li>
                    a. To satisfy any local, state, or Federal laws or
                    regulations.
                  </li>
                  <li>
                    b. To respond to requests, such as discovery, criminal,
                    civil, or administrative process, subpoenas, court orders,
                    or writs from law enforcement or other governmental or legal
                    bodies.
                  </li>
                  <li>
                    c. To bring legal action against a user who has violated the
                    law or violated the terms of use of our website, services,
                    and applications.
                  </li>
                  <li>
                    d. As may be necessary for the operation of our website,
                    services, and applications
                  </li>
                  <li>
                    e. To generally cooperate with any lawful investigation
                    about our users.
                  </li>
                  <li>
                    f. If we suspect any fraudulent activity on our website,
                    services, and applications or if we have noticed any
                    activity which may violate our terms or other applicable
                    rules.
                  </li>
                  <li>
                    g. If we, or substantially all of our assets, are acquired
                    or are in the process of being acquired by a third party, in
                    which case personal information held by us, about our
                    customers, will be one of the transferred assets.
                  </li>
                  <li>
                    h. We may employ companies and individuals to perform
                    functions on our behalf and we may disclose your personal
                    information to these parties for the purposes set out above,
                    for example, for reviewing and accepting applications,
                    processing payments, sending postal mail and email,
                    analyzing data, providing marketing assistance, providing
                    search results and links and providing customer service.
                    Those parties will be bound by strict contractual provisions
                    with us and will only have access to personal information
                    needed to perform their functions, and they may not use it
                    for any other purpose. Further, they must process the
                    personal information in accordance with this Notice and as
                    permitted by the Data Protection Regulation.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Use of Personal Data
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">You have the right to:</p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Request access
                  </span>{" "}
                  {`to your personal data (commonly known as a "data subject
                  access request"). This enables you to receive a copy of the
                  personal data we hold about you and to check that we are
                  lawfully processing it.`}
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Request correction
                  </span>{" "}
                  of the personal data that we hold about you. This enables you
                  to have any incomplete or inaccurate data we hold about you
                  corrected, though we may need to verify the accuracy of the
                  new data you provide to us.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Request erasure
                  </span>{" "}
                  of your personal data. This enables you to ask us to delete or
                  remove personal data where there is no good reason for us to
                  continue to process it. You also have the right to ask us to
                  delete or remove your personal data where you have
                  successfully exercised your right to object to processing,
                  where we may have processed your information unlawfully, or
                  where we are required to erase your personal data to comply
                  with local law. Note, however, that we may not always be able
                  to comply with your request of erasure for specific legal
                  reasons which will be notified to you, if applicable, at the
                  time of your request. Please note that this may amount to a
                  termination of your right to use the Site.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Object to processing
                  </span>{" "}
                  of your personal data where we are relying on a legitimate
                  interest (or those of a third party) and there is something
                  about your particular situation which makes you want to object
                  to processing on this ground as you feel it impacts on your
                  fundamental rights and freedoms. You also have the right to
                  object to where we are processing your personal data for
                  direct marketing purposes. In some cases, we may demonstrate
                  that we have compelling legitimate grounds to process your
                  information which override your rights and freedoms.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Request restriction of processing
                  </span>{" "}
                  {`of your personal data. This enables you to ask us to suspend
                  the processing of your personal data in the following
                  scenarios: (a) if you want us to establish the data's
                  accuracy; (b) where our use of the data is unlawful but you do
                  not want us to erase it; (c) where you need us to hold the
                  data even if we no longer require it as you need it to
                  establish, exercise or defend legal claims; or (d) you have
                  objected to our use of your data but we need to verify whether
                  we have overriding legitimate grounds to use it.`}
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Request the transfer
                  </span>{" "}
                  of your personal data to you or to a third party. We will
                  provide to you, or a third party you have chosen, your
                  personal data in a structured, commonly used, machine-readable
                  format. Note that this right only applies to automated
                  information which you initially provided consent for us to use
                  or where we used the information to perform a contract with
                  you.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Withdraw consent at any time
                  </span>{" "}
                  where we are relying on consent to process your personal data.
                  However, this will not affect the lawfulness of any processing
                  carried out before you withdraw your consent. If you withdraw
                  your consent, we may not be able to provide certain services
                  to you. We will advise you if this is the case at the time you
                  withdraw your consent. If you wish to exercise any of the
                  rights set out above, please contact support@flexfees.ng.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    No fee usually required:
                  </span>{" "}
                  You will not have to pay a fee to access your personal data
                  (or to exercise any of the other rights). However, we may
                  charge a reasonable fee if your request is clearly unfounded,
                  repetitive, or excessive. Alternatively, we may refuse to
                  comply with your request in these circumstances.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    What we may need from you:
                  </span>{" "}
                  We may need to request specific information from you to help
                  us confirm your identity and ensure your right to access your
                  personal data (or to exercise any of your other rights). This
                  is a security measure to ensure that personal data is not
                  disclosed to any person who has no right to receive it. We may
                  also contact you to ask you for further information in
                  relation to your request to speed up our response.
                </p>
                <p className="text-gray-600">
                  <span className="font-[600] text-gray-900">
                    Time limit to respond:
                  </span>{" "}
                  We try to respond to all legitimate requests within one month.
                  Occasionally it may take us longer than a month if your
                  request is particularly complex or you have made a number of
                  requests. In this case, we will notify you and keep you
                  updated. These rights can all be exercised by contacting us at
                  support@flexfees.ng.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">Opting Out</h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  From time to time, we may send you informational or marketing
                  communications related to our website, services, and
                  applications such as announcements or other information. If
                  you wish to opt out of such communications, you may contact
                  the following email address: support@flexfees.ng. You may also
                  click the opt-out link which will be provided at the bottom of
                  all such communications.
                </p>
                <p className="text-gray-600">
                  Please be advised that even though you may opt-out of such
                  communications, you may still receive information from us that
                  is specifically about your use of our website, services, and
                  applications or your account with us. By providing any
                  Personal Data to us, or by using our website, services, and
                  applications in any manner, you have created a commercial
                  relationship with us. As such, you agree that any email sent
                  from us or third-party affiliates, even unsolicited email,
                  shall specifically not be considered SPAM, as that term is
                  legally defined.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Acceptance of Risk
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  By continuing to use our website, services, and applications
                  in any manner, you manifest your continuing assent to this
                  Privacy Policy. You further acknowledge, agree, and accept
                  that no transmission of information or data via the internet
                  is always completely secure, no matter what steps are taken.
                  Your communications may go through a number of countries
                  before they are delivered – this is the nature of the
                  internet. You acknowledge, agree, and accept that we do not
                  guarantee or warrant the security of any information that you
                  provide to us, and that you transmit such information at your
                  own risk. We cannot accept responsibility for any unauthorized
                  access or loss of personal information that is beyond our
                  control.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Contact Information
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy or the way
                  we collect information from you, or if you would like to
                  launch a complaint about anything related to this Privacy
                  Policy, you may contact us at the following email address
                  support@miniemoney.com.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
