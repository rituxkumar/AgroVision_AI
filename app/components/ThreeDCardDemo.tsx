"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const features = [
    {
        title: "🌿 Disease Detection",
        desc: "Detect crop diseases instantly using AI-powered image analysis.",
        img: "/leaf-ai.png",
        link: "/features/detection",
    },
    {
        title: "📊 Confidence Score",
        desc: "Get AI confidence percentage for accurate decision making.",
        img: "/score.png",
        link: "/features/confidence",
    },
    {
        title: "💊 Treatment Advice",
        desc: "Receive smart treatment suggestions for detected diseases.",
        img: "/medicine.png",
        link: "/features/treatment",
    },
    {
        title: "🗂 Scan History",
        desc: "Access and track all your previous crop scan results.",
        img: "/history.png",
        link: "/features/history",
    },
    {
        title: "🤖 AI Chat Support",
        desc: "Ask crop-related questions anytime with AI support.",
        img: "/chatbot.png",
        link: "/features/chat",
    },
    {
        title: "🌍 Find Shops Near You",
        desc: "Locate nearby agro shops easily and avoid unnecessary travel and delays.",
        img: "/shop.png",
        link: "/features/shops",
    },
];

export function ThreeDCardDemo() {
    return (
        <section className="py-10 bg-white dark:bg-[#0f1f14] transition-colors">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-400 ">
                    Powerful AI Features
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                    {features.map((feature, index) => (
                        <CardContainer key={index} className="inter-var">
                            <CardBody className="bg-gray-200 relative group/card dark:bg-black dark:border-white/20 border-black/10 w-[20rem] rounded-xl p-6 border">

                                <CardItem
                                    translateZ="50"
                                    className="text-lg font-bold text-neutral-700 dark:text-white"
                                >
                                    {feature.title}
                                </CardItem>

                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-900 text-sm font-semibold mt-2 dark:text-neutral-300"
                                >
                                    {feature.desc}
                                </CardItem>

                                <CardItem translateZ="100" className="w-full mt-4 cursor-pointer">
                                    <Link href={feature.link}>
                                        <img
                                            src={feature.img}
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="feature image"
                                        />
                                    </Link>


                                </CardItem>

                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    );
}
