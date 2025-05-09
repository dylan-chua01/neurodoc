import { cn } from "@/lib/utils";
import { pricingPlans } from "@/utils/constants";
import { ArrowRight, Check, Coffee, HandHelping, Sparkles } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionH3 } from "../common/motion-wrapper";

type PriceType = {
  name: string;
  price: number | string;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
  billing?: string;
}

const PricingCard = ({ name, price, description, items, id, paymentLink, billing = "month" }: PriceType) => {
  const isPremium = id === 'pro';
  const isBasic = id === 'basic';
  const isWeekly = id === 'weekly';
  
  return (
    <MotionDiv
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative w-full max-w-sm rounded-xl border bg-white shadow-sm transition-all",
        isPremium ? "border-[#006747] ring-1 ring-[#006747]/20" : "border-gray-200"
      )}
    >

        {isWeekly && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="flex items-center justify-center px-4 py-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-medium shadow-md">
            <Coffee className="h-3 w-3 mr-1" />
            Just a cup of coffee!
          </div>
        </div>
      )}
      {isPremium && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="flex items-center justify-center px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-medium shadow-md">
            <Sparkles className="h-3 w-3 mr-1" />
            Most Popular
          </div>
        </div>
      )}
      
      {isBasic && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="flex items-center justify-center px-4 py-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-medium shadow-md">
            <HandHelping className="h-3 w-3 mr-1" />
                For only $2 more?
          </div>
        </div>
      )}
      
      <div className="p-8">
        <div className="mb-6">
          <h3 className={cn(
            "text-2xl font-bold mb-2",
            isPremium ? "text-[#006747]" : "text-gray-900"
          )}>
            {name}
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="mb-8">
          <div className="flex items-end gap-1">
            <span className={cn(
              "text-5xl font-bold tracking-tight",
              isPremium ? "text-[#006747]" : "text-gray-900"
            )}>
              ${price}
            </span>
            <span className="text-gray-500 text-sm mb-1">/{billing}</span>
          </div>
          {isWeekly && (
            <div className="mt-2 flex items-center text-gray-500 text-sm">
              <Coffee className="h-4 w-4 mr-1 text-orange-500" />
              <span>Less than your weekly coffee run!</span>
            </div>
          )}
        </div>

        <ul className="space-y-3 mb-8">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <Check className={cn(
                "h-5 w-5 flex-shrink-0 mt-0.5 mr-2",
                isPremium ? "text-[#006747]" : "text-gray-500"
              )} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={paymentLink}
          className={cn(
            "w-full flex items-center justify-center gap-2 rounded-lg py-3 font-medium transition-all",
            isPremium 
              ? "bg-gradient-to-r from-[#006747] to-[#008D5E] text-white hover:shadow-lg hover:shadow-[#006747]/20"
              : isBasic
                ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:shadow-lg hover:shadow-orange-400/20"
                : "bg-gray-50 text-[#006747] border border-[#006747]/20 hover:bg-[#006747]/5"
          )}
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </MotionDiv>
  );
};

export default function PricingSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MotionDiv 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#006747]/10 text-[#006747] text-sm font-medium mb-4"
          >
            Simple Pricing
          </MotionDiv>
          <MotionH3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your needs
          </MotionH3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard 
              key={plan.id} 
              {...plan} 
              billing={plan.id === 'weekly' ? 'week' : 'month'} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}