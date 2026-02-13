"use client";

import { useState, useEffect, useRef } from "react";
import { diseases } from "@/data/diseases";

/* ---------------- SYMPTOM MAP ---------------- */
const symptomMap: Record<string, string[]> = {

    // 🍂 DRY / BURN / SUKHA
    dry: [
        "sukh", "dry", "sukha", "shukh", "jala",
        "jal gaya", "sukh raha", "dry ho raha",
        "burn", "jala hua"
    ],

    // ⚫ SPOTS / PATCHES
    spot: [
        "spot", "daag", "dhabba", "patch",
        "nishan", "dhabba", "chitte",
        "brown spot", "kala daag"
    ],

    // 🕳 HOLES / INSECT DAMAGE
    hole: [
        "hole", "chhed", "ched",
        "kha gaya", "kata hua",
        "cheda hua", "surakh"
    ],

    // 🟡 YELLOWING
    yellow: [
        "yellow", "peela", "pila", "pla",
        "peela ho raha", "yellowing",
        "haldi color", "pila pad raha"
    ],

    // 🌱 WILT / MURJHANA
    wilt: [
        "murjha", "latak", "jhuk",
        "murjha gaya", "latak raha",
        "jhuk gaya", "down ho gaya",
        "niche jhuk"
    ],

    // 🌀 LEAF CURL
    curl: [
        "mud", "curl", "sikud",
        "mud raha", "gol ho raha",
        "moj raha", "mur raha",
        "tedha"
    ],

    // 🍃 LEAF FALL
    leaf_fall: [
        "patta gir", "pate gir", "gir raha",
        "leaf fall", "patte gir rahe",
        "gir gaye", "patta toot"
    ],

    // ⚫ BLACK COLOR
    black: [
        "kala", "black", "kaala",
        "dark spot", "black patch"
    ],

    // ⚪ WHITE POWDER / FUNGUS
    white: [
        "safed", "white", "powder",
        "safed layer", "white powder",
        "chuna jaisa", "powdery"
    ],

    // 🟤 ROT / GALNA
    rot: [
        "gal", "rot", "sada", "sad raha",
        "gal raha", "soft ho gaya",
        "gala hua"
    ],

    // 🌿 WEAK GROWTH
    weak: [
        "nahi badh raha", "growth ruk gaya",
        "chhota reh gaya", "kam growth",
        "slow growth"
    ],

    // 🍂 LEAF DROP + DRY EDGE
    edge_burn: [
        "kinara sukha", "edge dry",
        "side jal gaya", "patta kinara brown"
    ]
};


/* -------- Detect symptoms -------- */
const detectSymptoms = (text: string) => {
  const lower = text.toLowerCase();
  const found: string[] = [];

  Object.keys(symptomMap).forEach((symptom) => {
    const words: any = (symptomMap as any)[symptom];

    words.forEach((w: string) => {
      if (lower.indexOf(w) !== -1) {
        found.push(symptom);
      }
    });
  });

  return [...new Set(found)];
};





export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState<
        { type: "user" | "bot"; text: string }[]
    >([]);

    const chatEndRef = useRef<HTMLDivElement>(null);

    /* -------- Auto Scroll -------- */
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chat]);

    /* ---------------- AI LOGIC ---------------- */
    const findAnswer = (text: string) => {
        const lower = text.toLowerCase();
        const detectedSymptoms = detectSymptoms(text);

        let bestMatch: any = null;
        let bestScore = 0;

        for (let d of diseases) {
            let score = 0;

            if (lower.indexOf(d.crop.toLowerCase())) score++;

            d.symptoms?.forEach((s: string) => {
                if (detectedSymptoms.includes(s)) score++;
            });

            if (score > bestScore) {
                bestScore = score;
                bestMatch = d;
            }
        }

        if (bestMatch && bestScore > 0) {
            const emojis = [
                "🌱", "🍃", "🌿", "🌾", "🍀", "🌻", "🥬", "🥒", "🌽", "🧑‍🌾", "☘️",
                "🌳"];
            const responses = [
                `Lag raha hai ki ${bestMatch.disease} ho sakta hai. ${bestMatch.solution}`,

                `Aapke symptoms ${bestMatch.disease} se kaafi match karte hain. ${bestMatch.solution}`,

                `Possible disease: ${bestMatch.disease}. Chinta na karein — ${bestMatch.solution}`,

                `Jo symptoms aapne bataye hain, unke basis par ${bestMatch.disease} hone ke chances hain. ${bestMatch.solution}`,

                `Plant me ${bestMatch.disease} jaisa issue lag raha hai. ${bestMatch.solution}`,

                `Ye problem aksar ${bestMatch.disease} me dekhi jaati hai. ${bestMatch.solution}`,

                `Mujhe lag raha hai ki plant ${bestMatch.disease} se affected ho sakta hai. ${bestMatch.solution}`,

                `Symptoms dekh kar ${bestMatch.disease} ka indication mil raha hai. ${bestMatch.solution}`,

                `Aapke plant me ${bestMatch.disease} jaisi condition dikh rahi hai. ${bestMatch.solution}`,

                `Is type ke symptoms usually ${bestMatch.disease} me milte hain. ${bestMatch.solution}`,
            ];

            const randomEmoji =
                emojis[Math.floor(Math.random() * emojis.length)];


            return `${randomEmoji} ${responses[Math.floor(Math.random() * responses.length)]
                }`;
        }

        return "Exact disease identify nahi ho paaya. Kripya leaf image upload karein.";
    };

    const sendMessage = () => {
        if (!msg.trim()) return;

        const userMsg = msg;
        const botReply = findAnswer(msg);

        setChat((prev) => [
            ...prev,
            { type: "user", text: userMsg },
            { type: "bot", text: botReply },
        ]);

        setMsg("");
    };

    /* ---------- CLOSED STATE ---------- */
    if (!open) {
        return (
         <button
  onClick={() => setOpen(true)}
  className="fixed right-6 bottom-[30%] z-50 
  bg-[#132440] text-sky-400 px-5 py-3 rounded-full
  shadow-lg hover:scale-105 transition font-semibold cursor-pointer"
>
  ASK <span className="ai-animated">AI</span>
</button>

        );
    }

    /* ---------- OPEN CHATBOT ---------- */
    return (
        <div
            className="
      fixed right-6 bottom-[30%] z-50
      w-80 h-[420px]
      rounded-2xl shadow-2xl
      bg-white dark:bg-zinc-900
      border border-zinc-200 dark:border-zinc-700
      flex flex-col
    "
        >
            {/* Header */}
            <div className="flex justify-between items-center p-3 border-b dark:border-zinc-700">
                <h2 className="font-bold animated-text text-xl">
                    AgroVision AI
                </h2>



                <button
                    onClick={() => setOpen(false)}
                    className="text-sm px-2 font-bold text-red-900 py-1 rounded bg-zinc-200"
                >
                    ✕
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm chat-scroll">
                {chat.map((c, i) => (
                    <div
                        key={i}
                        className={`p-2 rounded-lg max-w-[85%]
              ${c.type === "user"
                                ? "ml-auto bg-blue-500 text-white"
                                : "bg-green-100 dark:bg-green-900 text-green-700 dark:text-white font-semibold"
                            }`}
                    >
                        {c.text}
                    </div>
                ))}

                <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t dark:border-zinc-700">
                <input
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Crop problem likhiye..."
                    className="
            w-full p-2 rounded-lg border
            bg-white dark:bg-zinc-800
            text-black dark:text-white
            border-zinc-300 dark:border-zinc-600
          "
                />

                <button
                    onClick={sendMessage}
                    className="mt-2 w-full bg-green-600 text-white cursor-pointer font-bold  py-2 rounded-lg hover:bg-green-700 transition"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
