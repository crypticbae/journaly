"use client"

import * as React from "react"
import { Quote } from "lucide-react"

const tradingQuotes = [
  // Legendäre Trader
  "The market is a device for transferring money from the impatient to the patient. - Warren Buffett",
  "It's not whether you're right or wrong, but how much money you make when you're right and how much you lose when you're wrong. - George Soros",
  "The trend is your friend until the end when it bends. - Ed Seykota",
  "Markets are constantly in a state of uncertainty and flux and money is made by discounting the obvious and betting on the unexpected. - George Soros",
  "The four most dangerous words in investing are: 'This time it's different.' - Sir John Templeton",
  
  // Risk Management
  "Risk comes from not knowing what you're doing. - Warren Buffett",
  "Never risk more than you can afford to lose. - Trading Wisdom",
  "The goal of a successful trader is to make the best trades. Money is secondary. - Alexander Elder",
  "Cut your losses short and let your profits run. - David Ricardo",
  "Don't put all your eggs in one basket. - Classic Wisdom",
  
  // Psychology & Mindset
  "Trading is 20% strategy and 80% psychology. - Trading Truth",
  "The market will tell you what it wants to do, if you listen. - Trading Wisdom",
  "Successful trading is anticipating the anticipation of others. - John Maynard Keynes",
  "Fear and greed are the two enemies of successful trading. - Trading Psychology",
  "The stock market is filled with individuals who know the price of everything, but the value of nothing. - Philip Fisher",
  
  // Deutsche Weisheiten
  "Geduld ist der Schlüssel zum Erfolg an der Börse. - André Kostolany",
  "Hin und her macht Taschen leer. - André Kostolany",
  "An der Börse ist alles möglich, auch das Gegenteil. - André Kostolany",
  "Wer viel misst, misst Mist. - Trading Weisheit",
  "Kaufe nur Aktien, die du auch 10 Jahre halten würdest. - Warren Buffett",
  
  // Motivational & Manifesting
  "Every master was once a disaster. Keep trading, keep learning.",
  "Your mindset determines your success in trading.",
  "Believe in your analysis, trust your strategy.",
  "Today's losses are tomorrow's lessons.",
  "I am a disciplined and profitable trader.",
  "My patience creates my profits.",
  "I stick to my trading plan no matter what.",
  "Every trade teaches me something valuable.",
  "I am in control of my emotions and my trades.",
  "Success in trading comes to those who wait for the right opportunity.",
  
  // Technical Analysis
  "Charts don't lie, but liars can chart. - Trading Truth",
  "The tape tells all. - Jesse Livermore",
  "Price is what you pay, value is what you get. - Warren Buffett",
  "Support and resistance are the heartbeat of the market.",
  "Trends continue until they don't.",
  
  // More Inspirational
  "Fortune favors the prepared mind in trading.",
  "Small consistent wins beat big risky bets.",
  "The best traders are made in bear markets.",
  "Discipline beats emotions every time.",
  "Your worst enemy in trading is yourself.",
  "Plan your trades and trade your plans.",
  "The market rewards patience and punishes haste.",
  "Learning never stops in trading.",
  "Adapt or get left behind by the market.",
  "Winners focus on winning, losers focus on winners.",
  
  // Jesse Livermore Quotes
  "There is only one side to the stock market; and it is not the bull side or the bear side, but the right side. - Jesse Livermore",
  "The desire for constant action irrespective of underlying conditions is responsible for many losses. - Jesse Livermore",
  "It never was my thinking that made the big money for me. It always was my sitting. - Jesse Livermore",
  "Markets are never wrong, opinions often are. - Jesse Livermore",
  "I made my money by selling too soon. - Jesse Livermore",
  
  // More German Wisdom
  "Börse ist zu 10% Logik und zu 90% Psychologie. - André Kostolany",
  "Wer nicht wagt, der nicht gewinnt. - Sprichwort",
  "Nichts ist unmöglich, der Beweis ist die Börse. - André Kostolany",
  "Geld verdienen an der Börse ist einfach, nur nicht leicht. - André Kostolany",
  "Die Börse ist wie ein Hund: Sie folgt der Wirtschaft, aber manchmal läuft sie voraus oder hinterher. - André Kostolany",
  
  // More Psychology
  "Emotion is the enemy of rational thought in trading.",
  "The market doesn't care about your feelings.",
  "Trade what you see, not what you hope.",
  "Overconfidence kills more traders than ignorance.",
  "The hardest thing in trading is doing nothing.",
  "Your ego is not your amigo in trading.",
  "Be fearful when others are greedy, greedy when others are fearful. - Warren Buffett",
  "The market can stay irrational longer than you can stay solvent. - John Maynard Keynes",
  "In trading, the impossible happens twice a week.",
  "Never catch a falling knife.",
  
  // Strategy & Planning
  "A goal without a plan is just a wish.",
  "Strategy without execution is worthless.",
  "The best trade is often the one you don't take.",
  "Know when to hold, know when to fold.",
  "Every trade should have a purpose.",
  "Your strategy is only as good as your discipline.",
  "Consistency beats perfection in trading.",
  "Plan for the worst, hope for the best.",
  "A trading plan is your roadmap to success.",
  "Without rules, trading is just gambling.",
  
  // Money Management
  "Preserve capital at all costs.",
  "Position sizing is more important than entry timing.",
  "Risk management is the key to longevity.",
  "Never risk money you can't afford to lose.",
  "Diversification is protection against ignorance. - Warren Buffett",
  "The first rule of trading: Don't lose money. The second rule: Don't forget the first rule.",
  "Money management is more important than the trading method.",
  "Capital preservation comes before capital appreciation.",
  "Manage risk, profits will manage themselves.",
  "Your account size doesn't matter, your risk management does.",
  
  // Success & Failure
  "Failure is simply the opportunity to begin again more intelligently.",
  "Every expert was once a beginner.",
  "Success is going from failure to failure without losing enthusiasm.",
  "The only real mistake is the one from which we learn nothing.",
  "Losses are part of the business, not personal failures.",
  "Experience is what you get when you don't get what you want.",
  "The market humbles everyone eventually.",
  "Learn from your mistakes, profit from your lessons.",
  "Successful traders are not right all the time, they're profitable.",
  "The market teaches patience to those who listen.",
  
  // Market Wisdom
  "Markets go up more than they go down, but down faster than up.",
  "The trend is your friend, until it ends.",
  "Buy the rumor, sell the news.",
  "Time in the market beats timing the market.",
  "The market always gives you a second chance.",
  "Volatility is the price of admission to superior returns.",
  "Bull markets climb a wall of worry.",
  "Bear markets end in capitulation.",
  "The market is always right, even when it's wrong.",
  "Price is the ultimate truth in trading.",
  
  // Final Motivational Batch
  "I trust my analysis and execute with confidence.",
  "Every chart tells a story, I listen carefully.",
  "My discipline today creates my wealth tomorrow.",
  "I am patient, I am profitable, I am a trader.",
  "The market rewards those who stay humble and hungry.",
  "I learn from every trade, win or lose.",
  "My trading journal is my path to mastery.",
  "Consistency compounds into extraordinary results.",
  "I control what I can control, I accept what I cannot.",
  "Today I choose discipline over emotion, patience over impulse."
];

export function TradingQuotes() {
  const [currentQuote, setCurrentQuote] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false)
      
      // After fade out, change quote and fade in
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % tradingQuotes.length)
        setIsVisible(true)
      }, 500) // Half second for fade out
      
    }, 10000) // Change every 10 seconds

    return () => clearInterval(interval)
  }, [])

  // Shuffle quotes on mount
  React.useEffect(() => {
    setCurrentQuote(Math.floor(Math.random() * tradingQuotes.length))
  }, [])

  return (
    <div className="flex items-center gap-3 min-h-[40px] overflow-hidden">
      <Quote className="h-4 w-4 text-primary flex-shrink-0" />
      <div 
        className={`text-sm text-base-content/80 italic transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {tradingQuotes[currentQuote]}
      </div>
    </div>
  )
} 