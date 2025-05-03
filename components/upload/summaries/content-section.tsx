// content-section.tsx
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { parseEmojiPoint, parsePoint } from "@/utils/summary-helpers";

const EmojiPointCard = ({ point, index }: { point: string; index: number }) => {
    const { emoji, text } = parseEmojiPoint(point);
    
    return (
        <motion.div
            key={`emoji-point-${index}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                ease: "easeOut"
            }}
            className="group relative bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 hover:border-rose-200 shadow-sm hover:shadow-md transition-all"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            <div className="relative flex items-start gap-4">
                {emoji && (
                    <span className="text-2xl shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-rose-50 text-rose-500">
                        {emoji}
                    </span>
                )}
                <p className="text-gray-700 text-lg leading-relaxed">
                    {text}
                </p>
            </div>
        </motion.div>
    );
}

const BulletPoint = ({ point, index }: { point: string; index: number }) => {
    return (
        <motion.div
            key={`bullet-point-${index}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
            }}
            className="group flex items-start pl-2"
        >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-400 mt-2.5 mr-3 flex-shrink-0 transition-all group-hover:bg-rose-600 group-hover:scale-110" />
            <p className="text-gray-700 text-base leading-relaxed">
                {point.replace(/^[•\-\s]+/, '').trim()}
            </p>
        </motion.div>
    );
}

const RegularPointCard = ({ point, index }: { point: string; index: number }) => {
    return (
        <motion.div
            key={`regular-point-${index}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.25,
                delay: index * 0.03
            }}
            className="group relative bg-white p-4 rounded-lg border border-gray-100 hover:border-rose-100 shadow-xs hover:shadow-sm transition-all"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            <p className="relative text-gray-700 text-base leading-relaxed">
                {point}
            </p>
        </motion.div>
    );
}

export default function ContentSection({
    title,
    points,
}: {
    title: string;
    points: string[];
}) {
    return (
        <div className="space-y-4">
            {points
                .filter(point => !parsePoint(point).isEmpty)
                .map((point, index) => {
                    const { isMainPoint, hasEmoji, isSubPoint } = parsePoint(point);

                    if (hasEmoji) {
                        return <EmojiPointCard key={`${title}-${index}`} point={point} index={index} />;
                    }

                    if (isMainPoint) {
                        return <BulletPoint key={`${title}-${index}`} point={point} index={index} />;
                    }

                    return <RegularPointCard key={`${title}-${index}`} point={point} index={index} />;
                })}
        </div>
    );
}