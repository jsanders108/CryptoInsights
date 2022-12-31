import React from "react";

export default function OverviewPage() {
  return (
    <main>
      <div className="overview-wrapper">
        <h2 className="section-title">INTRODUCTION</h2>
        <p className="intro-text">The year 2022 was a very difficult one for the cryptocurrency industry. 
          Between the collapse of Terra Luna and the implosion of the FTX exchange, 
          prices have been in a downward spiral for months and many investors have 
          lost large sums of money. </p>
        <p>Therefore, it seemed useful to get a pulse of the general population's 
          feelings towards the industry via a short survey. </p>
        <h2 className="section-title">OBJECTIVES</h2>
        <p className="objectives-text">Specifically, the following broad areas were explored:</p>
        <ul>
            <li>Awareness of and familiarity with cryptocurrencies</li>
            <li>Whether or not cryptocurrencies are currently owned (and which ones)</li>
            <li>Why (or why not) cryptocurrencies are currently owned</li>
            <li>Attitudes towards cryptocurrencies</li>
            <li>Likelihood to purchase cryptocurrencies in the future</li>
        </ul>
        <h2 className="section-title">METHODOLOGY</h2>
        <p className="methodology-text">An 18 question survey was distributed randomly to members of a QuestionPro Audience panel 
          from December 22 - December 28. Survey respondents were from the United States. A total of 
          178 completed surveys were collected. Data was weighted by gender due to oversampling of females (69%).
          The data were processed and analyzed using SPSS. </p>
        <h2 className="section-title">KEY FINDINGS</h2>
        <ul className="key-findings-ul">
            <li>Although a vast majority of respondents (86%) have heard about cryptocurrencies, 
                only 27% said they are familiar with them. Twenty-two percent currently 
                own them.</li>
            <li>Males, respondents who have more education, and respondents who have higher incomes are 
                more likely to own cryptocurrencies (and are more likely to purchase them in the future).</li>
            <li>Most respondents who became cryptocurrency owners said they did so to make money (long term or
                short term). Or, they bought them "just for fun".</li>
            <li>Most respondents who do not own cryptocurrencies said they avoid them because of the
                "high risk," and the fact that they "don't know enough about them".</li>
            <li>A majority of respondents (70%) have a neutral or unfavorable opinion of cryptocurrencies.
                Not surprisingly, ony 33% said they plan to purchase them in the future.</li>
        </ul>
        <h2 className="section-title">CONCLUSION</h2>
        <div>
            <p>Currently, the cryptocurrency industry is facing significant headwinds (many months of 
                declining prices, implosions of exchanges such as FTX, currency meltdowns such as Terra Luna,
                a product that is in many ways opaque and difficult to use for the average person, etc.). 
                Perhaps not surprisingly, a vast majority of survey respondents said they do not plan to purchase 
                cryptocurrencies in the future.</p>
            <p>This lack of purchase intent is problematic for an emerging technology that seeks/needs increased 
              levels of user adoption. Why is adoption currently so low? According to survey respondents it is 
              primarily because cryptocurrencies 1) are too difficult to use, and 2) people lack adequate 
              knowledge about them.</p>
            <p>Indeed, this lack of knowledge is reflected in certain misconceptions that emerged in the survey
                results. For example, half of respondents erroneously thought that cryptocurrencies 
                1) are not the best way to fully control your own money/investments (they are), and 2) are 
                not the fastest way to send money to someone else (they are).</p>
            <p>Therefore, to increase and sustain user adoption, a good place to start for projects in the 
              cryptocurrency space would be to allocate increased time and resources to consumer outreach and 
              education efforts. Instead of falling into the trap of focusing entirely on just building product, 
              hoping that users magically appear, projects should more effectively and comprehensively explain to 
              potential users how their technology works (at a high level), its benefits, and how it can be 
              used safely.</p>
        </div>
      </div>
    </main> 
  );
}