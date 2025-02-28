"use client";

import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import Section from "@/layout/section";
import Navbars from "../../../public/terms_of_service.jpeg";

const AML = () => {
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
                Anti-Money Laundering Policy
              </p>
              <p className="text-gray-600 font-nunito text-xl w-full max-w-[496px]">
                Kindly read our AML policy and our we combate the Financing of
                Terrorism (AML/CFT).
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
            <div className="flex flex-col gap-5 lg:gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-gray-900 text-2xl font-[600]">
                  Introduction
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    {`Minie Educational Finance Limited (hereinafter referred to as MinieMoney) supports global, regional, and national efforts to combat money laundering and terrorist financing (ML/TF), and is committed to establishing and maintaining appropriate policies, procedures, systems, and controls to ensure that MinieMoney complies with Anti-Money Laundering and Combating the Financing of Terrorism (AML/CFT) requirements. It is committed to the highest standards of AML/CFT compliance and requires management and employees to adhere to these standards to prevent the use of its products, services, channels or resources for money laundering, terrorist financing purposes or other financial crimes. Adherence to the MinieMoney AML/CFT Program is the responsibility of all employees.`}
                  </p>
                  <div>
                    <p className="text-gray-600">
                      {`The AML/CFT Program of MinieMoney includes the following minimum requirements:`}
                    </p>
                    <ul className="list-disc list-inside">
                      <li className="text-gray-600">
                        Customer Due Diligence (CDD) and Enhanced Due Diligence
                        (EDD) for higher risk categories of customers;
                      </li>
                      <li className="text-gray-600">
                        Customer and transaction screening and monitoring;
                      </li>
                      <li className="text-gray-600">Sanction screening;</li>
                      <li className="text-gray-600">
                        Reporting of suspicious transactions and activities;
                      </li>
                      <li className="text-gray-600">Record keeping;</li>
                      <li className="text-gray-600">AML/CFT Training; and</li>
                      <li className="text-gray-600">
                        Independent testing of the AML/CFT compliance programme.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">Objectives</h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  {`Minie Educational Finance Limited (hereinafter referred to as MinieMoney) supports global, regional, and national efforts to combat money laundering and terrorist financing (ML/TF), and is committed to establishing and maintaining appropriate policies, procedures, systems, and controls to ensure that MinieMoney complies with Anti-Money Laundering and Combating the Financing of Terrorism (AML/CFT) requirements. It is committed to the highest standards of AML/CFT compliance and requires management and employees to adhere to these standards to prevent the use of its products, services, channels or resources for money laundering, terrorist financing purposes or other financial crimes. Adherence to the MinieMoney AML/CFT Program is the responsibility of all employees.`}
                </p>
                <div>
                  <p className="text-gray-600">
                    The objectives of this Policy are:
                  </p>
                  <ul className="list-disc list-outside ml-4">
                    <li className="text-gray-600">
                      To ensure that all applicable statutory and regulatory
                      requirements are complied with.
                    </li>
                    <li className="text-gray-600">
                      To provide a framework and minimum requirements which
                      MinieMoney will adopt for combating the money laundering,
                      terrorist financing and Proliferation financing risks it
                      is exposed to. The framework and minimum requirements are
                      intended to protect MinieMoney, its products, services,
                      channels, resources, or employees from being misused for
                      money laundering, financing of terrorism or other
                      financial crimes; and
                    </li>
                    <li className="text-gray-600">
                      To ensure that the reputation and integrity of the company
                      is protected by taking all reasonable steps to prevent its
                      use for ML/TF purposes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Stakeholders
              </h3>
              <p className="text-gray-600">
                {`This Policy applies to all employees of MinieMoney, whether permanent, contract or temporary, regardless of their position in the company, with no exception. It also applies to all branches, divisions, departments, and units of MinieMoney.`}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Periodic Review
              </h3>
              <p className="text-gray-600">
                {`This Policy shall be reviewed at least once every two years. However, an ad hoc review may be triggered by major statutory or regulatory developments.`}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Statement of Policy
              </h3>
              <ul className="list-inside list-none text-gray-600">
                <li>
                  a. MinieMoney supports global efforts against Money
                  Laundering, and Terrorist Financing.
                </li>
                <li>
                  b. MinieMoney shall comply with the Money Laundering
                  Prohibition Act (amended) 2011, the Prevention of Terrorism
                  Act (amended) 2012, the CBN AML/CFT regulation 2013 and best
                  practice requirements.
                </li>
                <li>
                  c. MinieMoney shall not in any way inhibit the implementation
                  of the provisions of AML/CFT regulations but co-operate with
                  the regulators and law enforcement agencies in the
                  implementation of a robust AML/CFT regime in Nigeria.
                </li>
                <li>
                  d. MinieMoney shall define persons and entities that they
                  would be prohibited from entering any business relationship
                  with e.g., sanctioned persons and entities as defined by
                  Office of Foreign Assets Control “OFAC”, local regulators as
                  well as known fraudsters.
                </li>
                <li>
                  e. MinieMoney shall ensure a structure is in place for
                  identifying and reporting unusual, suspicious, or criminal
                  activities to the Compliance Unit and ultimately to the
                  appropriate authorities.
                </li>
                <li>
                  f. MinieMoney shall comply promptly with requests made in
                  relation to AML/CFT legislations and provide information to
                  the Central Bank of Nigeria (CBN), Nigeria Financial
                  Intelligence Unit (NFIU)and other competent authorities.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Money Laundering and Terrorism Financing
              </h3>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Prohibition of Money Laundering
                </h4>
                <div>
                  <p className="text-gray-600">
                    In line with the United Nations 2000 Convention against
                    Transnational Organized Crime, also known as the “Palermo
                    Convention,” conducts which are deemed to be money
                    laundering (as described below) are prohibited:
                  </p>
                  <ul className="list-disc list-outside ml-4">
                    <li className="text-gray-600">
                      The conversion or transfer of property, knowing it is
                      derived from a criminal offense, for the purpose of
                      concealing or disguising its illicit origin or of
                      assisting any person who is involved in the commission of
                      the crime to evade the legal consequences of his actions.
                    </li>
                    <li className="text-gray-600">
                      The concealment or disguising of the true nature, source,
                      location, disposition, movement, rights with respect to,
                      or ownership of property knowing that it is derived from a
                      criminal offense.
                    </li>
                    <li className="text-gray-600">
                      The acquisition, possession, or use of property, knowing
                      at the time of its receipt that it was derived from a
                      criminal offense or from participation in a crime.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Stages of Money Laundering.
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    The following activities are prohibited:
                  </p>
                  <ul className="list-disc list-outside ml-4">
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        Placement stage:
                      </strong>{" "}
                      The physical disposal of cash or other assets derived from
                      criminal activity.
                    </li>
                    <li className="text-gray-600">
                      <strong className="text-gray-900">Layering stage:</strong>{" "}
                      The separation of illicit proceeds from their source by
                      layers of financial transactions intended to conceal the
                      origin of the proceeds.
                    </li>
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        Integration stage:
                      </strong>{" "}
                      Supplying apparent legitimacy to illicit wealth through
                      the re-entry of the funds into the economy in what appears
                      to be normal business or personal transactions.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Prohibition of Terrorist Financing
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    In accordance with Article 2 of the United Nations
                    International Convention for Suppression of Terrorist
                    Financing, this Policy hereby prohibits activities that are
                    deemed to be Terrorist Financing as defined hereunder:
                  </p>
                  <p className="text-gray-600">
                    Any activity of any person who by any means, directly or
                    indirectly, unlawfully, and willfully, providing or
                    collecting funds with the intention that they should be used
                    or in the knowledge that they are to be used, in full or in
                    part, to carry out:
                  </p>
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. An act that constitutes an offence within the scope of
                      and as defined in one of the treaties listed in the annex;
                      or
                    </li>
                    <li className="text-gray-600">
                      {`b. Any other act intended to cause death or serious bodily
                      injury to a civilian, or to any other person not taking an
                      active part in the hostilities in a situation of armed
                      conflict, when the purpose of such act, by its nature or
                      context, is to intimidate a population, or to compel a
                      government or an international organization to do or to
                      abstain from doing any act.`}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Stages of the Terrorist Financing Process
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    The process of financing terrorist organizations can be
                    broken down into three stages or phases, allowing one to
                    accurately identify the three main motivations behind the
                    process.
                  </p>
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      {" "}
                      <strong className="text-gray-900">
                        a. Fundraising stage:
                      </strong>{" "}
                      The initial phase, also referred to as the collection
                      phase, consists of the search by terrorist organizations
                      for financing sources.
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      <strong className="text-gray-900">
                        b. Disposition stage:
                      </strong>{" "}
                      The intermediate phase seeks to place the collected funds
                      at the disposition of the terrorist organization, to await
                      their final use. It is also called the
                      transmission/dissimulation phase.
                    </li>
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        c. Utilization stage:
                      </strong>{" "}
                      This is the last phase, in which the collected,
                      transferred, and accumulated funds are used for the
                      financing of the terrorist organization’s structural
                      logistics, or the operating logistics related to the
                      planning and execution of terrorist acts. It is also
                      called the use phase.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Prohibition of Proliferation Financing
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    Activities such as providing funding or financial services
                    which are used, in whole or in part, for the manufacture,
                    acquisition, possession, development, export,
                    trans-shipment, brokering, transport, transfer, stockpiling
                    or use of nuclear, chemical or biological weapons and their
                    means of delivery and related materials (including both
                    technologies and dual-use goods used for non-legitimate
                    purposes), in contravention of national laws or, where
                    applicable, international obligations (Proliferation
                    financing) are hereby prohibited by this Policy in line with
                    the mandates of the Financial Action Task Force (FATF).
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Prohibition of Cybercrime
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    This Policy hereby prohibits any crime committed through a
                    computer system or network (“Cybercrime”). Due to the rapid
                    adaption of technology money launderers, terrorist
                    financiers, and criminal groups have become more
                    sophisticated in their methods and techniques. These
                    criminals use computer system to move money offshore from
                    the comfort of their homes and convert illegally obtained
                    funds to virtual currencies which becomes difficult to trace
                    and confiscate. MinieMoney shall adopt and operate a
                    cybersecurity framework that covers cybersecurity practices
                    and information security processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Roles and responsibilities of Officers
              </h3>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Board of Directors
                </h4>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. The ultimate responsibility for AML/CFT compliance is
                      placed on the Board and top management of MinieMoney.
                    </li>
                    <li className="text-gray-600">
                      b. The Board shall ensure that a comprehensive operational
                      AML/CFT Policy and Procedure is formulated by Management
                      and presented to the Board for consideration and formal
                      approval; and
                    </li>
                    <li className="text-gray-600">
                      c. Receive regular, periodic reports from the Compliance
                      Department on the implementation of the AML/CFT policy and
                      any material AML/CFT issues.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Executive Compliance Officer (ECO)
                </h4>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. Oversee the management of MinieMoney’s Compliance risk.
                    </li>
                    <li className="text-gray-600">
                      b. Supervise the Compliance function and make
                      recommendations to the Board on the approval of the
                      AML/CFT policy.
                    </li>
                    <li className="text-gray-600">
                      c. Ensure adequate supervisory role over the Chief
                      Compliance Officers and his/her duties
                    </li>
                    <li className="text-gray-600">
                      d. Provide oversight on the Compliance program at the
                      Board level.
                    </li>
                    <li className="text-gray-600">
                      {`e. Ensures the Board and Management’s participation in the
                      AML/CFT Training.`}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Senior Management
                </h4>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. A senior management staff shall be designated as the
                      Chief Compliance Officer with the relevant competence,
                      authority, and independence to implement MinieMoney’s
                      AML/CFT compliance programme; and
                    </li>
                    <li className="text-gray-600">
                      b. Approve every exception allowed with regards to the
                      AML/CFT Policy.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Compliance Department
                </h4>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. The Chief Compliance Officer shall be appointed at
                      management level and shall report directly to the
                      Executive Compliance Officer on all matters under this
                      policy.
                    </li>
                    <li className="text-gray-600">
                      b. Develop and implement an AML/CFT Compliance Programme
                      including policies, procedures, systems, and controls.
                    </li>
                    <li className="text-gray-600">
                      c. Receive and vet suspicious transaction reports from
                      staff.
                    </li>
                    <li className="text-gray-600">
                      d. File Suspicious Transaction Reports (“STRs”) with the
                      Nigerian Financial Intelligence Unit (NFIU).
                    </li>
                    <li className="text-gray-600">
                      e. File other regulatory returns with the CBN, SEC, NFIU
                      and other relevant regulatory and supervisory authorities,
                      as applicable.
                    </li>
                    <li className="text-gray-600">
                      {`f. Render "nil" reports to the CBN, SEC and NFIU, where
                      necessary to ensure compliance.`}
                    </li>
                    <li className="text-gray-600">
                      g. Monitor the day-to-day operations to detect unusual
                      customer activity.
                    </li>
                    <li className="text-gray-600">
                      h. Co-ordinate the training of staff in AML/CFT awareness,
                      detection methods and reporting requirements,
                    </li>
                    <li className="text-gray-600">
                      i. Serve both as a liaison officer between MinieMoney, the
                      CBN, SEC, NFIU and other relevant authorities, as
                      appropriate; and
                    </li>
                    <li className="text-gray-600">
                      j. Serve as a point-of-contact for all employees on issues
                      relating to money laundering and terrorist financing.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">Employees</h4>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. All employees must familiarize themselves with this
                      policy;
                    </li>
                    <li className="text-gray-600">
                      b. Take responsibility for ensuring compliance with this
                      policy as it relates to their job functions;
                    </li>
                    <li className="text-gray-600">
                      c. Report any violations or other forms of misconduct
                      relating to this policy through the designated channels;
                      and
                    </li>
                    <li className="text-gray-600">
                      d. Report suspicious transactions or activities to the
                      Compliance department.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Internal Audit
                </h4>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. Periodically review and test compliance with the
                      AML/CFT program, CDD/KYC policies and
                    </li>
                    <li className="text-gray-600">
                      b. Risk-based internal audit and specific review of
                      compliance with policies and procedures for PEPs and other
                      high-risk clients and activities.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Money Laundering and Terrorist Financing Risks Assessment
              </h3>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Risks Identification and Assessment
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    MinieMoney’s business encompasses a wide range of financial
                    products and services, which are associated with different
                    ML/TF risks. Examples of ML/TF risk associated with the
                    different activities include: Attempts to launder money,
                    finance terrorism, or conduct other illegal activities
                    through MinieMoney can emanate from many different sources.
                    However, certain products, services, customers, entities,
                    and geographic locations may be more vulnerable or have been
                    historically abused by money launderers and criminals. This
                    step involves identifying and assessing the money laundering
                    and terrorism financing risks that may be associated with
                    MinieMoney’s unique combination of:
                  </p>
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">a. Customers;</li>
                    <li className="text-gray-600">b. Products and services;</li>
                    <li className="text-gray-600">
                      c. Geographic locations; and
                    </li>
                    <li className="text-gray-600">d. Delivery channels.</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Customer Risk
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    Certain customers may pose specific risks. MinieMoney shall
                    take an overall account of a customer’s background,
                    geographic areas, and such other required measures to
                    identify the customer’s ML/TF risks. Some factors that
                    MinieMoney shall consider are:
                  </p>
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        a. Politically exposed persons (PEPs).
                      </strong>
                       Individuals who are or have been entrusted with prominent
                      public functions (both foreign and local), for example,
                      senior politicians, senior government officials, judicial
                      or military officials, senior executives of state-owned
                      corporations, important political party officials.
                      Business relationships with family members or close
                      associates of PEPs may involve reputational risks like
                      those with PEPs.
                    </li>
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        b. Geographic risk of the customer:
                      </strong>
                       Determine the level of risk of the customer’s nationality
                      and country of residence based on a list of areas that are
                      exposed to ML/TF risks defined by MinieMoney
                    </li>
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        c. The channel used by the customer
                      </strong>
                        to open account and establish business relation.
                    </li>
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        d. The transaction amount
                      </strong>
                        with which the customer first establishes business
                      relation.
                    </li>
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        e. Products or services
                      </strong>
                        that the customer applies.
                    </li>
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        f. Whether the customer has other high ML/TF risk
                        characteristics.
                      </strong>
                        For example, the customer fails to provide a reasonable
                      explanation regarding the significant geographic distance
                      between the customer and the branch; frequent and
                      unexplained movement of accounts to different
                      institutions; frequent and unexplained movement of funds
                      between institutions in various geographic locations.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Product, Service and New Technology Risks
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    MinieMoney shall consider the potential money laundering and
                    terrorism financing risks associated with each of its
                    specific products, service, and new technology. Some factors
                    to consider are:
                  </p>
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. MinieMoney shall identify products, services,
                      transactions, or delivery channels that have higher ML/TF
                      risk based on the nature of the individual product,
                      service, transaction, or delivery channel.
                    </li>
                    <li className="text-gray-600">
                      b. MinieMoney shall, before launching a new product,
                      service, or business (including a new payment method,
                      applying new technology on existing or new products or
                      services), perform ML/TF risk assessment and establish
                      relevant risk management measures to mitigate the risks
                      identified.
                    </li>
                    <li className="text-gray-600">
                      c. Examples of such individual product, service,
                      transaction or delivery channel risk factors are as
                      follows:
                      <ul className="list-disc list-outside ml-4">
                        <li className="text-gray-600">
                          The extent of associating with cash.
                        </li>
                        <li className="text-gray-600">
                          The channel to establish business relations or process
                          transactions, including whether it allows
                          non-face-to-face transactions, and whether it is a new
                          payment method such as electronic banking.
                        </li>
                        <li className="text-gray-600">
                          Whether it allows a high amount of money or value
                          transfer.
                        </li>
                        <li className="text-gray-600">
                          Anonymous transactions.
                        </li>
                        <li className="text-gray-600">
                          Payment received from unknown or un-associated third
                          parties.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Geography/Country Risk
                </h4>
                <div className="flex flex-col ">
                  <p className="text-gray-600">
                    This involves identifying geographic locations that may pose
                    a higher risk to MinieMoney’s business. MinieMoney will seek
                    to understand and evaluate the specific risks associated
                    with doing business in, opening, and servicing accounts,
                    offering products and services and/or facilitating
                    transactions involving certain geographic locations. The
                    Geography/Country risk may also be analyzed with respect to
                    the location of the business division, unit, or business
                    line, and may also include subsidiaries, affiliates, and
                    offices, both internationally and domestically. MinieMoney
                    shall identify domestic and international geographic
                    locations that may pose a higher risk to its AML/CFT
                    compliance program. Each case should be evaluated
                    individually when assessing the risks associated with doing
                    business, such as opening accounts or facilitating
                    transactions, in certain geographic locations. Factors that
                    may result in a country or region posing a higher risk
                    include:
                  </p>
                  <ul className="list-outside ml-4 list-disc text-gray-600">
                    <li className="text-gray-600">
                      Countries that are subject to sanctions, embargoes or
                      similar measures issued by credible organizations such as
                      the United Nations and the Financial Action Task Force.
                    </li>
                    <li className="text-gray-600">
                      Countries identified by credible sources as lacking
                      appropriate AML/CFT laws, regulations, and other measures.
                    </li>
                    <li className="text-gray-600">
                      Countries identified by credible sources as providing
                      funding or support for terrorist activities or that have
                      designated terrorist organizations operating within them.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Delivery Channel Risk
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    MinieMoney has various modes of transaction and distribution
                    (delivery channels) of its products and services. Some
                    delivery channels may be more susceptible to ML/TF risk.
                    Consequently, it should be assessed whether, and to what
                    extent, the method of delivery, such as non-face-to-face or
                    the involvement of third parties, including intermediaries
                    and agents, could increase the inherent money laundering
                    risk.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  New Technology
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    MinieMoney shall assess the AML/CFT risk associated with
                    technologies prior to implementation. Efforts should be made
                    in assessing the new technology’s susceptibility to ML/TF
                    risk and the applicable mitigation factors for each type of
                    risk. Consequently, it should be assessed whether, and to
                    what extent, the new technology could increase the inherent
                    money laundering risk.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Customer Due Diligence
              </h3>
              <p className="text-gray-600">
                It is the paramount duty and responsibility of MinieMoney to
                know and understand its customers fully in terms of identity and
                activity to the extent of establishing the
                correctness/genuineness of the credentials for extending better
                customer service. This exercise also helps MinieMoney to
                identify adverse conditions, if any, associated with the
                applicant/customer (at the time of establishing a business
                relationship) and guard against criminals/fraudsters making use
                of MinieMoney’s channels/services for their nefarious
                activities. With the present-day multifarious dimensions of the
                delivery of financial services and products, the need for a
                structured methodology for understanding customers at the time
                of establishing a relationship has assumed great importance.
              </p>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  When to carry out Customer Due Diligence
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    MinieMoney will undertake Customer Due Diligence (“CDD”)
                    measures when -
                  </p>
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. Business relationships are established.
                    </li>
                    <li className="text-gray-600">
                      b. Carrying out occasional transactions above the
                      MinieMoney applicable and designated threshold or its
                      equivalent in other currencies or as may be determined by
                      the CBN from time to time, including where the transaction
                      is carried out in a single operation or several operations
                      that appear to be linked.
                    </li>
                    <li className="text-gray-600">
                      c. Carrying out occasional transactions where credit or
                      debit cards are used as a payment system to effect money
                      transfer.
                    </li>
                    <li className="text-gray-600">
                      d. There is a suspicion of money laundering or terrorist
                      financing, regardless of any exemptions or any other
                      thresholds referred to in this section; or
                    </li>
                    <li className="text-gray-600">
                      e. There are doubts on the veracity or adequacy of
                      previously obtained customer identification data.
                      MinieMoney must not after obtaining all the necessary
                      documents and being so satisfied, repeatedly perform
                      identification and verification exercises every time a
                      customer conducts a transaction except if there is a
                      suspicion that the previously obtained information is not
                      complete or has changed.
                    </li>
                    <p className="text-gray-600">
                      Furthermore, MinieMoney shall:
                    </p>
                    <li className="text-gray-600">
                      {`a. Identify its customers, whether permanent or
                      occasional, natural, or legal persons, or legal
                      arrangements, and verify the customers' identities using
                      reliable, independently sourced documents, data, or
                      information; and`}
                    </li>
                    <li className="text-gray-600">
                      b. Conduct ongoing due diligence on a business
                      relationship. Types of customer information to be obtained
                      and identification data to be used to verify the
                      information may be provided by the Compliance Department
                      in a supplementary policy to this policy.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Who must undergo MinieMoney’s KYC Procedure?
                </h4>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        a. The Customer:
                      </strong>
                       This includes the individual account holder establishing
                      a business relationship with MinieMoney.
                    </li>
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        b. Person acting on behalf of another (proxy):
                      </strong>
                       Identification evidence must be obtained for both the
                      agent and the principal.
                    </li>
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        c. Principal controller of an account (Promoter or
                        Signatory): 
                      </strong>
                       The person(s) authorized to provide instructions for
                      running the account or business relationship.
                    </li>
                    <li className="text-gray-600">
                      <strong className="text-gray-900">
                        d. Intermediate parties: 
                      </strong>
                       Identify the relevant parties where an account is managed
                      by an intermediary or get assurance that the intermediary
                      has conducted due diligence on the customer and is able to
                      provide documents/evidence in that regard.The extent of
                      measures required or the documentary evidence to be
                      obtained in relation to corporate entities depends on the
                      nature of the business or service that the company
                      requires from MinieMoney, and a risk-based approach shall
                      be taken.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Risk-based approach to customer due diligence
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    MinieMoney shall adopt a risk-based approach to AML/CFT. A
                    risk-based approach to AML/CFT means that MinieMoney is
                    expected to identify, assess, and understand the ML/TF risks
                    to which it is exposed and adopt AML/CFT measures
                    commensurate to those risks to mitigate them effectively.
                    This will allow MinieMoney to adopt a more flexible set of
                    measures to channel its resources more effectively and apply
                    preventive measures that are commensurate to the nature and
                    extent of risks. The risk-based approach requires that:
                  </p>
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. Where higher risks are identified, MinieMoney shall
                      take enhanced due diligence measures to manage and
                      mitigate the risks; and
                    </li>
                    <li className="text-gray-600">
                      b. Where lower risks are identified, MinieMoney shall take
                      simplified measures to manage and mitigate the risks,
                      provided that simplified customer due diligent measures
                      are not permitted whenever there is suspicion of money
                      laundering or terrorist financing.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Compliance Department
                </h4>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. The Chief Compliance Officer shall be appointed at
                      management level and shall report directly to the
                      Executive Compliance Officer on all matters under this
                      policy.
                    </li>
                    <li className="text-gray-600">
                      b. Develop and implement an AML/CFT Compliance Programme
                      including policies, procedures, systems, and controls.
                    </li>
                    <li className="text-gray-600">
                      c. Receive and vet suspicious transaction reports from
                      staff.
                    </li>
                    <li className="text-gray-600">
                      d. File Suspicious Transaction Reports (“STRs”) with the
                      Nigerian Financial Intelligence Unit (NFIU).
                    </li>
                    <li className="text-gray-600">
                      e. File other regulatory returns with the CBN, SEC, NFIU
                      and other relevant regulatory and supervisory authorities,
                      as applicable.
                    </li>
                    <li className="text-gray-600">
                      {`f. Render "nil" reports to the CBN, SEC and NFIU, where
                      necessary to ensure compliance.`}
                    </li>
                    <li className="text-gray-600">
                      g. Monitor the day-to-day operations to detect unusual
                      customer activity.
                    </li>
                    <li className="text-gray-600">
                      h. Co-ordinate the training of staff in AML/CFT awareness,
                      detection methods and reporting requirements,
                    </li>
                    <li className="text-gray-600">
                      i. Serve both as a liaison officer between MinieMoney, the
                      CBN, SEC, NFIU and other relevant authorities, as
                      appropriate; and
                    </li>
                    <li className="text-gray-600">
                      j. Serve as a point-of-contact for all employees on issues
                      relating to money laundering and terrorist financing.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">Employees</h4>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. All employees must familiarize themselves with this
                      policy;
                    </li>
                    <li className="text-gray-600">
                      b. Take responsibility for ensuring compliance with this
                      policy as it relates to their job functions;
                    </li>
                    <li className="text-gray-600">
                      c. Report any violations or other forms of misconduct
                      relating to this policy through the designated channels;
                      and
                    </li>
                    <li className="text-gray-600">
                      d. Report suspicious transactions or activities to the
                      Compliance department.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Internal Audit
                </h4>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. Periodically review and test compliance with the
                      AML/CFT program, CDD/KYC policies and
                    </li>
                    <li className="text-gray-600">
                      b. Risk-based internal audit and specific review of
                      compliance with policies and procedures for PEPs and other
                      high-risk clients and activities.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Risk categorization of customers
              </h3>
              <p className="text-gray-600">
                MinieMoney will adopt the following risk categorizations of
                customers based on the risks of money laundering and terrorist
                financing that they pose.
              </p>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  When to carry out Customer Due Diligence
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    <strong className="text-gray-900">A. Prohibited</strong> -
                    MinieMoney will not tolerate any dealings of any kind given
                    the risk. The following prohibitions apply:
                  </p>
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. MinieMoney will not open and/or maintain anonymous
                      accounts, numbered accounts, or accounts in obviously
                      fictitious names.
                    </li>
                    <li className="text-gray-600">
                      b. MinieMoney will not open payable through accounts; and
                    </li>
                    <li className="text-gray-600">
                      c. MinieMoney will not open accounts or enter any business
                      relationship with individuals and entities listed on
                      recognized sanctions lists.
                    </li>
                    <li className="text-gray-600">
                      d. MinieMoney will not open accounts or enter any business
                      relationship with individuals and/or business entities
                      transacting, trading, or dealing with crypto currency
                      exchanges.
                    </li>
                    <li className="text-gray-600">
                      e. MinieMoney will not finance or process any transaction
                      that involves arms & ammunition or military equipment for
                      unauthorized individuals & entities.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600 font-[400]">
                    <strong className="text-gray-900">B. High Risk</strong> -
                    The risks here are significant but are not necessarily
                    prohibited. To mitigate the heightened risk presented,
                    MinieMoney should apply enhanced due diligence measures.
                    MinieMoney shall carry out enhanced due diligence measures
                    by:
                  </p>
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. Establishing the purpose for opening an account.
                    </li>
                    <li className="text-gray-600">
                      b. Establishing the level and nature of business
                      activities intended.
                    </li>
                    <li className="text-gray-600">
                      c. Obtaining senior management approval to establish or
                      continue (if a relationship is already existing) the
                      business relationship.
                    </li>
                    <li className="text-gray-600">
                      d. Establishing the source of funds and source of wealth
                      of the customer; and
                    </li>
                    <li className="text-gray-600">
                      e. Identifying and verifying the ultimate beneficial
                      owners of the customers.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-600 font-[400]">
                  <strong className="text-gray-900">C. Medium Risk</strong>-
                  Medium risks are more than a low- or standard risk of money
                  laundering, and merit additional scrutiny, but do not rise to
                  the level of high risk. Normal due diligence requirements
                  should apply here.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-600 font-[400]">
                  <strong className="text-gray-900">
                    D. Low or Standard Risk
                  </strong>
                  - WD. Low or Standard Risk- This represents the baseline risk
                  of money laundering. Simplified due diligence requirements
                  should apply here. There are low risks in circumstances where:
                </p>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a) The risk or money laundering or terrorist financing is
                      lower.
                    </li>
                    <li className="text-gray-600">
                      b) Information on the identity of the customer and the
                      beneficial owner of the customer is publicly available; or
                    </li>
                    <li className="text-gray-600">
                      c) Adequate checks and controls exist elsewhere in the
                      national systems.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Enhanced Due Diligence
              </h3>
              <p className="text-gray-600">
                MinieMoney shall perform Enhanced Due Diligence for high risk
                customers, business relationship or transactions including:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. Politically Exposed Persons (PEPs)
                    </li>
                    <li className="text-gray-600">b. Non-resident customers</li>
                    <li className="text-gray-600">c. Private customers</li>
                    <li className="text-gray-600">
                      d. Legal persons or legal arrangements such as trusts that
                      are personal-asset-holding vehicles
                    </li>
                    <li className="text-gray-600">
                      e. Companies that have nominee-shareholders or shares in
                      bearer form
                    </li>
                    <li className="text-gray-600">
                      f. Cross-borders and business relationships such as
                      correspondent company relationships where MinieMoney is
                      the correspondent company
                    </li>
                    <li className="text-gray-600">
                      g. Customers from jurisdictions or territories designated
                      by the Financial Action Task Force or other relevant body
                      as having a higher risk for money laundering and financing
                      of terrorism, or as having weak and/or ineffective AML/CFT
                      controls.
                    </li>
                    <li className="text-gray-600">
                      h. Any other businesses, activities or professionals as
                      may be prescribed by regulatory, supervisory, or competent
                      authorities
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Politically Exposed Persons (PEPs)
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    According to the extant local AML/CFT Regulations,
                    Politically Exposed Persons (PEPs) are individuals who are
                    or have been entrusted with prominent public functions in
                    Nigeria or in foreign countries, and people or entities
                    associated with them and include:
                  </p>
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. Heads of State or Government.
                    </li>
                    <li className="text-gray-600">b. State Governors.</li>
                    <li className="text-gray-600">
                      c. Local Government Chairmen.
                    </li>
                    <li className="text-gray-600">d. Senior politicians.</li>
                    <li className="text-gray-600">
                      e. Senior government officials.
                    </li>
                    <li className="text-gray-600">
                      f. Judicial or military officials.
                    </li>
                    <li className="text-gray-600">
                      g. Senior executives of state-owned corporations.
                    </li>
                    <li className="text-gray-600">
                      h. Important political party officials.
                    </li>
                    <li className="text-gray-600">
                      i. Family members or close associates of PEPs; and
                    </li>
                    <li className="text-gray-600">
                      j. Members of royal families.
                    </li>
                  </ul>
                  <p className="text-gray-600">
                    PEPs also include persons who are or have been entrusted
                    with a prominent function by an international organization,
                    including members of senior management including directors,
                    deputy directors and members of the board or equivalent
                    functions other than middle ranking or more junior officers.
                    Family members are individuals who are related to a PEP
                    either directly (consanguinity) or through marriage or
                    similar (civil) forms of partnership. Close associates are
                    individuals who are closely connected to a PEP, either
                    socially or professionally.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Enhanced Due Diligence Measures for High Risk Relationships
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    Enhanced Due Diligence measures for PEPs and other high risk
                    accounts include the following:
                  </p>
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. Obtain senior management approval (preferably from the
                      Managing Director/Chief Executive or his alternate who
                      must be an Executive Director) before establishing the
                      business relationships or continuing the relationship
                      where one already exists.
                    </li>
                    <li className="text-gray-600">
                      b. Identify and verify the legal status and existence of
                      the legal person or legal arrangement
                    </li>
                    <li className="text-gray-600">
                      c. Identify and verify the ultimate beneficial owners of a
                      high-risk corporate entity. Where this is not feasible,
                      identify and verify all the directors of the corporate
                      entity.
                    </li>
                    <li className="text-gray-600">
                      d. Take reasonable measures to establish the source of
                      wealth and the source of funds of customers. This may be
                      achieved by comparing information provided during
                      onboarding with the relationship manager’s knowledge of
                      the customer, by confirming the veracity of the
                      information provided with publicly available information,
                      or by comparing the actual source of funds and operation
                      of the account with the information provided during
                      onboarding
                    </li>
                    <li className="text-gray-600">
                      e. Put in place appropriate risk management systems to
                      determine whether a potential customer or existing
                      customer or the beneficial owner is a PEP.
                    </li>
                    <li className="text-gray-600">
                      f. Where a customer has been accepted or has an ongoing
                      relationship with MinieMoney and the customer or
                      beneficial owner is subsequently found to be or becomes a
                      PEP, the business shall obtain senior management approval
                      to continue the business relationship (preferably from the
                      Managing Director/Chief Executive or his alternate who
                      must be an Executive Director).
                    </li>
                    <li className="text-gray-600">
                      g. Conduct enhanced and ongoing monitoring of the
                      relationship and in the event of any transaction that is
                      abnormal, shall flag the account and report the
                      transaction immediately to the Nigeria Financial
                      Intelligence Unit (NFIU) as a suspicious transaction.
                    </li>
                    <li className="text-gray-600">
                      h. Verification of the operating address of the company
                      and signatories
                    </li>
                    <li className="text-gray-600">
                      i. Verification of the purpose of account opening by
                      reviewing the transactions on the account to confirm that
                      it is in line with the stated purpose.
                    </li>
                    <li className="text-gray-600">
                      j. Ensure PEPs monthly returns are rendered to the CBN and
                      NFIU
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Simplified Due Diligence
              </h3>
              <p className="text-gray-600">
                Where there are low risks, MinieMoney shall apply reduced or
                simplified measures. There are low risks in circumstances where:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. the risk of money laundering or terrorist financing is
                      lower.
                    </li>
                    <li className="text-gray-600">
                      b. information on the identity of the customer is publicly
                      available; or
                    </li>
                    <li className="text-gray-600">
                      c. adequate checks and controls exist elsewhere in the
                      national systems In circumstances of low risk, MinieMoney
                      shall apply the simplified or reduced CDD measures when
                      identifying and verifying the identity of their customers.
                      MinieMoney shall not apply the simplified CDD measures to
                      a customer where there is suspicion or money laundering or
                      terrorist financing or specific higher risk scenarios and
                      in such a circumstance, enhanced Due Diligence is
                      mandatory. MinieMoney shall adopt CDD measures on a risk
                      sensitive-basis and have regard to risk involved in the
                      type of customer, product, transaction or the location or
                      the customer.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Ongoing due diligence
              </h3>
              <p className="text-gray-600">MinieMoney shall:</p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. ensure that documents, data, or information collected
                      under the customer due diligence process is kept
                      up-to-date and relevant by undertaking reviews of existing
                      records, particularly for higher risk categories of
                      customers or business relationships; and
                    </li>
                    <li className="text-gray-600">
                      b. scrutinize transactions undertaken during the
                      relationship to ensure that the transactions are
                      consistent with the knowledge of the customer, their
                      business and risk profile and where necessary, the source
                      of funds. MinieMoney shall ensure that ongoing due
                      diligence is performed based on a customer’s assigned risk
                      rating. It must establish and maintain adequate procedures
                      to ensure that all KYC information and supporting
                      documents are reviewed and updated periodically where
                      there is an ongoing business relationship with the
                      customer. In this regard, as a minimum, periodic customer
                      reviews must be performed in accordance with the following
                      time periods.
                    </li>
                    <li className="text-gray-600">
                      c. high risk: on an annual basis.
                    </li>
                    <li className="text-gray-600">
                      d. medium risk: every two (2) years; and
                    </li>
                    <li className="text-gray-600">
                      e. low risk: every three (3) years.
                    </li>
                    <p className="text-gray-600">
                      Furthermore, the following events could trigger a need to
                      review customer information:
                    </p>
                    <li className="text-gray-600">
                      a) a transaction of significant value takes place.
                    </li>
                    <li className="text-gray-600">
                      b) a customer documentation standard changed
                      substantially.
                    </li>
                    <li className="text-gray-600">
                      c) there is a material change in the way that the account
                      is operated.
                    </li>
                    <li className="text-gray-600">
                      d) MinieMoney becomes aware that it lacks sufficient
                      information about an existing customer.
                    </li>
                    <li className="text-gray-600">
                      e) Where the customer voluntarily advises MinieMoney that
                      its KYC information has changed; or
                    </li>
                    <li className="text-gray-600">
                      f) Where a staff member conducts a review on the customer
                      in the normal course of business and ascertains that the
                      customer information has changed.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Sanctions Screening
              </h3>
              <p className="text-gray-600">
                MinieMoney recognizes the official sanctions list issued by
                competent authorities. The following official lists are
                recognized and embedded in MinieMoney’s sanctions screening
                system:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a) The United Nations Security Council Sanctions List.
                    </li>
                    <li className="text-gray-600">
                      b) The Office of Foreign Asset Control Sanctions List.
                    </li>
                    <li className="text-gray-600">
                      c) The European Union Sanctions List.
                    </li>
                    <li className="text-gray-600">
                      d) Her Majesty Treasury Sanctions List; and
                    </li>
                    <li className="text-gray-600">
                      e) Sanctions list developed by local regulators.
                    </li>
                    <p className="text-gray-600">
                      MinieMoney will ensure that prospective and existing
                      customers and transactions are screened against relevant
                      sanctions list and will not establish business
                      relationships, discontinue existing business relationships
                      and/or block funds where sanctioned individuals or
                      entities are involved.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Transaction monitoring and suspicious activity reporting
              </h3>
              <p className="text-gray-600">
                In accordance with local and international norms, it is an
                offence to fail to report a suspicion of money laundering and
                terrorist financing. Failure to report such circumstances is
                punishable on conviction by heavy fines and/or imprisonment.
                MinieMoney shall have an AML/CFT transaction monitoring system
                to enable MinieMoney to:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. Monitor transactions for red flags of suspicious
                      transactions.
                    </li>
                    <li className="text-gray-600">
                      b. Investigate potential suspicious transactions.
                    </li>
                    <li className="text-gray-600">
                      c. Report suspicious activities to the Nigerian Financial
                      Intelligence Unit (NFIU).
                    </li>
                    <li className="text-gray-600">
                      d. Document and keep records of all suspicious
                      transactions reported to the NFIU for the period specified
                      by law; and
                    </li>
                    <li className="text-gray-600">
                      e. Avoid tipping off customers involved in suspicious
                      transaction reports.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      According to the Money Laundering Prohibition Act 2011 (as
                      amended in 2012), a suspicious transaction is:
                    </li>
                    <li className="text-gray-600">
                      a) A transaction that involves a frequency which is
                      unjustifiable or unreasonable.
                    </li>
                    <li className="text-gray-600">
                      b) A transaction that is surrounded by conditions of
                      unusual or unjustified complexity.
                    </li>
                    <li className="text-gray-600">
                      c) A transaction that appears to have no economic
                      justification or lawful objective; or
                    </li>
                    <li className="text-gray-600">
                      d) In the opinion of the Financial Institution or
                      Designated Non-Financial Institution involves terrorist
                      financing or is inconsistent with the known transaction
                      pattern of the account or business relationship.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Monitoring of transactions for Suspicious Activities
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    MinieMoney shall have systems in place to monitor
                    transactions with the aim of detecting, investigating, and
                    reporting suspicious transactions of potential money
                    laundering and terrorist financing. Staff members,
                    especially front-office and sales staff, shall receive
                    adequate training to enable them to identify and report
                    suspicious transactions to the Compliance Department.
                    Further, MinieMoney shall consider, based on its risk
                    profile and regulatory requirements, implementing an
                    automated system to monitor transactions for suspicious
                    activities. The system shall be capable of monitoring all
                    transactions consummated by MinieMoney on any its core
                    applications and automatically generate alerts on suspicious
                    transactions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Investigation and Reporting of Suspicious
                  TransactionsMonitoring of transactions for Suspicious
                  Activities
                </h4>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a) Staff members who identify a suspicious transaction
                      shall immediately report their suspicions to the
                      Compliance Department through the channels established for
                      such reporting.
                    </li>
                    <li className="text-gray-600">
                      b) Staff members who report suspicious transactions or who
                      have knowledge of a reported suspicious transaction are
                      prohibited from informing the customer who is the subject
                      of the report.
                    </li>
                    <li className="text-gray-600">
                      c) The Compliance Department shall have the responsibility
                      to review all suspicious transactions reported by
                      employees, and all suspicious transactions detected by any
                      transaction monitoring system that MinieMoney may have
                      implemented.
                    </li>
                    <li className="text-gray-600">
                      d) The Compliance Department shall, on a timely basis,
                      report unresolved suspicious transaction to the NFIU.
                    </li>
                    <li className="text-gray-600">
                      e) The Compliance Department shall document and keep
                      records of all suspicious transactions reported to the
                      NFIU for the period specified by law and/or regulations.
                    </li>
                    <li className="text-gray-600">
                      f) It is very important that there is no delay in
                      reporting. It is the duty of all employees to report
                      suspicion as soon as they have established reasonable
                      grounds and collected the relevant supporting material.
                    </li>
                    <li className="text-gray-600">
                      g) MinieMoney may make further enquiries within the
                      parameters of its own records, but it does not need to
                      carry out more detailed criminal investigations. It is the
                      responsibility of law enforcement agencies to do so.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Protection of staff members who report suspicious transactions
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    Employees are advised to make their reports confidential,
                    and no employee shall be victimized for making a report
                    pursuant to this policy provided the report is made in good
                    faith.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Know Your Employee (KYE)
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    In line with Section 38 of the Central Bank of Nigeria
                    AML/CFT regulation 2013, employee accounts shall be
                    monitored for potential signs of money laundering. In this
                    regard, the account of the Chief Compliance Officer shall be
                    reviewed by the Chief Internal Auditor. Where there is a
                    violation involving the Chief Compliance Officer, employees
                    shall report the violations to the Managing Director.
                    MinieMoney’s KYE procedure shall include background
                    screening for prospective employees, verification of
                    references, experience, professional qualifications and
                    obtain approval from the CBN. For Staff of the grade
                    Assistant Manager (AGM) and above, clearance is to be
                    obtained from the CBN prior to resumption of duty. Other
                    Staff below the grade of AGM may assume duty without CBN’s
                    prior approval but approval must be gotten within 30 days of
                    their assumption of duty.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-gray-900 text-lg font-[600]">
                  Tipping off
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    It is an offence for an employee of MinieMoney to “tip off”
                    (i.e., inform) a person suspected of money laundering or
                    terrorist financing that:
                  </p>
                  <ul className="list-none list list-inside text-gray-600">
                    <li>
                      1. They or someone else has made a lawful disclosure
                      (i.e., a suspicious transaction report); or
                    </li>
                    <li>
                      2. There is a money laundering investigation taking place,
                      where the tipping off is likely either to prejudice any
                      investigation arising from the disclosure or to prejudice
                      the investigation disclosed to the person suspected of
                      money laundering.
                    </li>
                  </ul>
                  <p className="text-gray-600">
                    Under no circumstances should the customer know that they
                    have been reported for the activity or transaction, or that
                    an investigation is underway or may be underway. This does
                    not mean that MinieMoney cannot ask the customer for an
                    explanation or continue to provide them with normal customer
                    service. But it does mean that MinieMoney must do so without
                    alerting them to the fact that MinieMoney may or had already
                    notified the Authorities. If customers being investigated
                    are alerted, MinieMoney could be blamed for tipping them
                    off, which is a criminal offence for the individual who
                    alerted the customer to the existence of an actual or
                    potential investigation.
                  </p>
                  <p className="text-gray-600">
                    The offence of tipping off is punishable on conviction by
                    fines and/or imprisonment.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Other Regulatory Reporting Requirements
              </h3>
              <p className="text-gray-600">
                MinieMoney shall make timely regulatory returns to the
                appropriate regulators as required by extant laws and
                regulations including:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      a. Foreign Currency Transaction Returns (Section 2 of the
                      Money Laundering Prohibition Act 2011, as amended in
                      2012): A transfer to or from a foreign country of funds or
                      securities by a person or body corporate including a Money
                      Service Business of a sum exceeding US$10,000 or its
                      equivalent shall be reported to the Central Bank of
                      Nigeria, Securities and Exchange Commission or the
                      Commission in writing within 7 days from the date of the
                      transaction.
                    </li>
                    <li className="text-gray-600">
                      b. MinieMoney shall report to the Nigeria Financial
                      Intelligence Unit any single transaction, lodgment, or
                      transfer of funds more than N5,000,000 or its equivalent,
                      in the case of an individual; or N10,000,000 or its
                      equivalent, in the case of a body corporate.
                    </li>
                    <li className="text-gray-600">
                      MinieMoney shall ensure strict compliance with other AML
                      reporting requirements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Record Keeping
              </h3>
              <p className="text-gray-600">
                In line with relevant laws and regulations, MinieMoney shall
                maintain AML/CFT records as follows:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-none text-gray-600">
                    <li className="text-gray-600">
                      {`a. the record of a customer's identification for a period
                      of at least 5 years after the closure of the account or
                      the severance of relations with the customer; and`}
                    </li>
                    <li className="text-gray-600">
                      b. the record and other related information of a
                      transaction carried out by a customer and suspicious
                      transactions reported by MinieMoney to the relevant
                      authorities shall be preserved, for a period of at least 5
                      years after carrying out the transaction or making of the
                      report.
                    </li>
                    <li className="text-gray-600">
                      All records maintained should be available to authorized
                      persons promptly on request without undue
                      delays.MinieMoney shall maintain all necessary records of
                      transactions, both domestic and international for at least
                      five years after completion of the transaction or such
                      longer period as may be required by the CBN and NFIU,
                      provided that this requirement shall apply regardless of
                      whether the account or business relationship is on-going
                      or has been terminated.The components of records of
                      transaction to be maintained by MinieMoney include the;
                    </li>
                    <li className="text-gray-600">
                      {`a) records of customer's and beneficiary's names,
                      addresses or other identifying information normally
                      recorded by the intermediary.`}
                    </li>
                    <li className="text-gray-600">
                      b) nature and date of the transaction.
                    </li>
                    <li className="text-gray-600">
                      c) type and amount of currency involved; and
                    </li>
                    <li className="text-gray-600">
                      d) type and identifying number of any account involved in
                      the transaction.
                    </li>
                    <li className="text-gray-600">
                      MinieMoney shall maintain records of the identification
                      data, account files and business correspondence for at
                      least five years after the termination of an account or
                      business relationship or such longer period us may be
                      required by the CBN and NFIU,
                    </li>
                    <li className="text-gray-600">
                      MinieMoney shall ensure that all customer-transaction
                      records and information are available on a timely basis to
                      the CBN, SEC and NFIU.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Employee AML/CFT Training
              </h3>
              <p className="text-gray-600">
                All staff members are required to complete mandatory training
                and to ensure that it is recorded. Regulatory training in
                Nigeria is a requirement in respect of KYC/AML issues in terms
                of the Money Laundering Prohibition Act of 2011 (as amended in
                2012), the Central Bank of Nigeria AML/CFT Regulations 2013 and
                the Securities and Exchange Commission AML/CFT Regulations 2013.
              </p>
              <p className="text-gray-600">
                MinieMoney shall develop training programmes for staff covering
                compliance issues and as part of the orientation programmes for
                new staff and those posted to the front office, company
                operations and branch office staff, particularly cashiers,
                account opening, mandate, and marketing staff, internal control
                and audit staff and managers.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    At a minimum, the basic elements of the employee training
                    programme of MinieMoney shall include -
                  </p>
                  <ul className="list-inside list-disc text-gray-600">
                    <p>AML Regulations and offences.</p>
                    <li className="text-gray-600">
                      the nature of money laundering.
                    </li>
                    <li className="text-gray-600">
                      {`money laundering 'red flags' and suspicious transactions,
                      including trade-based money laundering typologies`}
                    </li>
                    <li className="text-gray-600">reporting requirements</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-disc text-gray-600">
                    <p>Customer Due Diligence</p>
                    <li className="text-gray-600">
                      risk-based approach to AML and CFT; and
                    </li>
                    <li className="text-gray-600">
                      record keeping and retention policy.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-disc text-gray-600">
                    <p>
                      Some specific units may be provided with bespoke trainings
                      addressing issues such as
                    </p>
                    <li className="text-gray-600">
                      Trade finance risks and trade-based money laundering
                      (TBML)
                    </li>
                    <li className="text-gray-600">
                      Sanctions risks management
                    </li>
                    <li className="text-gray-600">
                      PEP relationship management
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <ul className="list-inside list-disc text-gray-600">
                    <p>
                      Various training methods could be used to ensure that
                      employees understand the topic in question. Methods
                      include:
                    </p>
                    <li className="text-gray-600">Formal education</li>
                    <li className="text-gray-600">
                      E-learning (computer-based)
                    </li>
                    <li className="text-gray-600">Facilitator-led</li>
                    <li className="text-gray-600">Presentations</li>
                    <li className="text-gray-600">Email communications</li>
                    <li className="text-gray-600">Induction programmes.</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    Compliance officers must ensure that the information
                    contained in all material published in any of the above
                    formats remains correct, relevant, and applicable.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    The compliance function shall work with the Human Resources
                    Department and other departments as appropriate to develop
                    an effective compliance training program, including
                    appropriate introductory training for new employees and
                    ongoing training for all employees and managers.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">
                    The Compliance Department must ensure that training records
                    are obtained and filed for every training conducted.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Independent testing of the AML/CFT Compliance Programme of
                MinieMoney
              </h3>
              <p className="text-gray-600">
                The AML/CFT Compliance Programme of MinieMoney shall be subject
                to independent testing by the Internal Audit department for its
                adequacy, completeness, and effectiveness. MinieMoney has
                entrusted Internal Audit Department with the responsibility to
                test the implementation and adherence of company’s AML/CFT
                Policy. This examination is required to be conducted annually as
                part of the audit plan of the Internal Audit Department. The
                Internal Audit department shall also conduct risk-based internal
                audit and specific review of compliance with policies and
                procedures for PEPs and other high-risk clients and activities.
                This shall be conducted either as a separate audit exercise or
                as part of the overall audit of the Compliance Department. The
                findings/recommendations should be reported directly to the
                Chief Compliance Officer and the Board Audit Committee. In
                addition, the Compliance Department should also carry out
                periodic assessments to verify among other things the
                implementation and adherence of the AML Policy in MinieMoney and
                report any noncompliance to the Board.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Co-operation with Competent Authorities
              </h3>
              <p className="text-gray-600">
                MinieMoney is committed to supporting the competent authorities
                in carrying out their statutory functions of combating financial
                crimes and terrorist financing. MinieMoney shall comply promptly
                with all the requests made pursuant to the provisions of
                relevant AML/ CFT laws and Regulations and provide all requested
                information to the CBN, NFIU and other competent authorities.
                All requests for from competent authorities must be immediately
                report to the Compliance Department for necessary action. The
                Compliance department may seek advice or support from any other
                department, such as the Legal department, in discharging this
                function.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Terminating Business Relationships
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  MinieMoney shall have the right to terminate a business
                  relationship with a customer due to suspicious activities,
                  incomplete KYC documentation or other similar or related
                  activities that company deems unacceptable. In such a
                  situation where MinieMoney decides to terminate a business
                  relationship, the following measures shall apply:
                </p>
                <ul className="list-none text-gray-600">
                  <li>
                    a) MinieMoney shall inform the affected customer in writing
                    of its intention to terminate the business relationship with
                    the customer. The notice period will be at least two weeks
                    long or as may be advised by the Legal department.
                  </li>
                  <li>
                    b) The termination shall be jointly coordinated by the
                    Compliance Department, the Legal Department, and the
                    Business Unit responsible for managing the business
                    relationship with the customer.
                  </li>
                  <li>
                    c) MinieMoney must consider if termination will not
                    prejudice any ongoing or potential investigation of the
                    customer by law enforcement agencies.
                  </li>
                  <li>
                    Deviations from the above procedure must be approved by the
                    MD/CEO or his alternate who must be a director.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Reliance on Intermediaries and Third Parties for CDD Function
              </h3>
              <p className="text-gray-600">
                MinieMoney may outsource some or all its CDD functions to a
                third party. MinieMoney must satisfy itself that copies of
                identification data and other relevant documentation relating to
                the CDD requirements shall be made available from the third
                party upon request without delay. Notwithstanding the
                conditions, the ultimate responsibility for customer
                identification and verification shall be with MinieMoney.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">Exceptions</h3>
              <p className="text-gray-600">
                All deviations from this Policy must be approved in writing by
                the MD/CEO for MinieMoney or his alternate who must be a
                director.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                Penalty for non-compliance
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  Failure to adhere to this Policy may lead to disciplinary
                  action in line with the Disciplinary Policy of MinieMoney. In
                  addition, an employee may be held personally liable for civil
                  or criminal penalties which include fines, payment of damages
                  and/ or imprisonment.
                </p>
                <ul className="list-disc text-gray-600 list-inside">
                  <p>
                    Employees may also report breaches of this Policy directly
                    via the Whistleblowing Channels. MinieMoney has several
                    Independent Third-Party Hotlines for reporting unethical
                    practices.
                  </p>
                  <p>
                    Independent Third-Party Hotlines (managed by [kindly
                    populate with the details of the independent third parties)
                  </p>
                  <li>Telephone Numbers:</li>
                  <li>Email Address:</li>
                  <li>Web Link: [Please insert link]</li>
                </ul>
                <div>
                  <p className="text-gray-600">
                    The telephone line will be manned between 8.00 am and 5.00
                    pm on workdays only while the e-mail address and web link
                    will be available always except during periods of
                    maintenance.
                  </p>
                  <p className="text-gray-600">
                    The officers manning the Whistleblowing hotline will submit
                    periodic reports to the designated officers of MinieMoney
                    Compliance Department, which is responsible for receiving
                    and actioning such reports.
                  </p>
                </div>
                <ul className="list-disc text-gray-600 list-inside">
                  <p>Central Bank of Nigeria Hotlines</p>
                  <li>Telephone Numbers:</li>
                  <li>Email Address:</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-2xl font-[600]">
                CBN AML/CFT Administrative Sanctions
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-gray-600">
                    MinieMoney’s failure to adhere to this Policy may lead to
                    penalties in line with the Central Bank of Nigeria (CBN)
                    sanctions/fines to preserve Anti- Money Laundering and
                    Combating the Financing of Terrorism (AML/CFT) regulations
                    which stipulates fines on financial institutions, their
                    directors, and other key officials for 48 Money Laundering
                    infractions.
                  </p>
                  <p className="text-gray-600">
                    The administrative sanctions shall apply for contravention
                    of the following laws/regulations:
                  </p>
                </div>
                <ul className="list-none text-gray-600 list-inside">
                  <li>
                    a. Money Laundering (Prohibition) Act, 2011 (as amended)
                  </li>
                  <li>b. Terrorism (Preventions) Act, 2011 (as amended)</li>
                  <li>
                    c. Terrorism Prevention (Freezing of International
                    Terrorists Funds and Other Related Measures) Regulations
                    2013
                  </li>
                  <li>
                    d. Central Bank of Nigeria (Anti-Money Laundering and
                    Combating the Financing of Terrorism for Financial
                    Institutions in Nigeria) Regulations, 2013
                  </li>
                  <p>
                    Under the new sanction’s regimes, MinieMoney, Board Members,
                    Executive Compliance Officer, Chief Compliance Officer,
                    Chief Risk Officer, Chief Internal Auditor, and any employee
                    that breaches AML/CFT requirements shall be subject to
                    applicable sanctions by the CBN in line with the CBN AML/CFT
                    (Administrative Sanctions) Regulation 2018 as detailed in
                    Appendix III.  
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
};

export default AML;
