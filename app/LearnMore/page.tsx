"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  AlertTriangle,
  ShieldCheck,
  Droplets,
  Sun,
  Bug,
} from "lucide-react";

const diseases = [
  {
    crop: "Tomato",
    disease: "Late Blight",
    description:
      "Late blight is a highly destructive fungal disease that affects tomato crops during humid and cool weather conditions.",
    impact:
      "If not treated early, it spreads rapidly and can destroy the entire crop within days.",
    prevention:
      "Ensure proper spacing, avoid overwatering, and apply recommended fungicides such as Mancozeb.",
  },
  {
    crop: "Potato",
    disease: "Early Blight",
    description:
      "Early blight causes brown circular spots on leaves and reduces plant strength.",
    impact:
      "Severe infection leads to reduced tuber size and lower yield.",
    prevention:
      "Use crop rotation and apply Chlorothalonil spray.",
  },
  {
    crop: "Wheat",
    disease: "Leaf Rust",
    description:
      "Leaf rust appears as orange-brown powdery spots on wheat leaves.",
    impact:
      "It reduces photosynthesis and lowers grain quality.",
    prevention:
      "Apply fungicide and use resistant seed varieties.",
  },
  {
    crop: "Rice",
    disease: "Bacterial Leaf Blight",
    description:
      "A bacterial infection causing yellowing and wilting of rice leaves.",
    impact:
      "Can reduce crop yield significantly during rainy seasons.",
    prevention:
      "Use certified seeds and maintain proper field drainage.",
  },
  {
    crop: "Cotton",
    disease: "Boll Rot",
    description:
      "Boll rot damages cotton bolls and reduces fiber quality.",
    impact:
      "Infected plants produce low-quality cotton and financial loss.",
    prevention:
      "Avoid excessive irrigation and improve air circulation.",
  },
  {
    crop: "Maize",
    disease: "Downy Mildew",
    description:
      "A fungal disease that causes yellow stripes on maize leaves.",
    impact:
      "Severely affects plant growth and yield.",
    prevention:
      "Use treated seeds and apply Metalaxyl fungicide.",
  },
  {
    crop: "Chilli",
    disease: "Anthracnose",
    description:
      "Causes dark sunken spots on fruits and stems.",
    impact:
      "Reduces market value and overall harvest.",
    prevention:
      "Spray Copper-based fungicides and avoid overhead watering.",
  },
  {
    crop: "Soybean",
    disease: "Frogeye Leaf Spot",
    description:
      "Gray-centered spots appear on soybean leaves.",
    impact:
      "Heavy infection results in premature leaf drop.",
    prevention:
      "Use resistant varieties and proper crop rotation.",
  },
  {
    crop: "Sugarcane",
    disease: "Red Rot",
    description:
      "Internal stem discoloration and rotting of sugarcane.",
    impact:
      "Can completely damage sugarcane fields.",
    prevention:
      "Plant disease-free setts and avoid waterlogging.",
  },
  {
    crop: "Groundnut",
    disease: "Tikka Disease",
    description:
      "Brown circular leaf spots reducing plant strength.",
    impact:
      "Leads to poor pod formation and yield loss.",
    prevention:
      "Apply fungicide and remove infected plant debris.",
  },
  {
  crop: "Banana",
  disease: "Panama Wilt",
  description:
    "A fungal soil-borne disease that causes yellowing and wilting of banana leaves.",
  impact:
    "If untreated, it spreads through soil and can wipe out entire banana plantations.",
  prevention:
    "Use disease-free planting material and practice proper field sanitation.",
},
{
  crop: "Onion",
  disease: "Purple Blotch",
  description:
    "Fungal infection causing purple lesions on onion leaves.",
  impact:
    "Reduces bulb size and market quality.",
  prevention:
    "Ensure proper spacing and apply recommended fungicide spray.",
},
{
  crop: "Brinjal",
  disease: "Phomopsis Blight",
  description:
    "Causes leaf spots, fruit rot, and stem cankers in brinjal plants.",
  impact:
    "Severely reduces fruit production and quality.",
  prevention:
    "Use certified seeds and apply Carbendazim spray.",
},
{
  crop: "Mustard",
  disease: "Alternaria Blight",
  description:
    "Dark circular spots on leaves and pods of mustard plants.",
  impact:
    "Leads to premature leaf fall and reduced oil content.",
  prevention:
    "Crop rotation and timely fungicide application.",
},
{
  crop: "Papaya",
  disease: "Papaya Ring Spot Virus",
  description:
    "Viral disease causing mosaic patterns and ring-shaped spots on fruits.",
  impact:
    "Affects fruit development and drastically reduces yield.",
  prevention:
    "Control aphid vectors and remove infected plants immediately.",
},
{
  crop: "Mango",
  disease: "Powdery Mildew",
  description:
    "White powder-like growth on flowers and young leaves.",
  impact:
    "Reduces fruit set and overall mango production.",
  prevention:
    "Spray Sulfur fungicide during early flowering stage.",
},
{
  crop: "Cabbage",
  disease: "Black Rot",
  description:
    "Bacterial disease causing V-shaped yellow lesions on leaves.",
  impact:
    "Can spread rapidly and destroy entire cabbage fields.",
  prevention:
    "Use disease-free seeds and maintain proper drainage.",
},
{
  crop: "Pea",
  disease: "Ascochyta Blight",
  description:
    "Dark lesions on leaves and stems caused by fungal infection.",
  impact:
    "Reduces pod formation and plant vigor.",
  prevention:
    "Practice crop rotation and apply protective fungicide.",
},
{
  crop: "Sunflower",
  disease: "Sclerotinia Wilt",
  description:
    "Fungal disease causing stem rot and plant collapse.",
  impact:
    "Severely reduces seed yield in affected fields.",
  prevention:
    "Avoid excessive irrigation and improve soil drainage.",
},
{
  crop: "Turmeric",
  disease: "Leaf Blotch",
  description:
    "Small brown spots that merge and dry out turmeric leaves.",
  impact:
    "Reduces rhizome growth and final harvest weight.",
  prevention:
    "Spray Copper-based fungicide and maintain field hygiene.",
},

];

export default function LearnMore() {
  return (
    <div className="min-h-screen px-6 md:px-20 py-20 bg-white dark:bg-[#0f1f14] transition-colors">

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold text-yellow-600  mt-2  flex justify-center gap-3 items-center">
          <Leaf size={40} /> Crop Disease Awareness
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn about major crop diseases, their impact on farming, and how early detection can prevent huge agricultural losses.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">

        {diseases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-green-50 dark:bg-[#13281b] p-8 rounded-2xl shadow-md border border-green-200 dark:border-green-800 hover:shadow-green-500/30 transition"
          >
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
              {item.crop} - {item.disease}
            </h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-200">

              <p className="flex gap-3">
                <AlertTriangle className="text-yellow-500" />
                <span><strong>Description:</strong> {item.description}</span>
              </p>

              <p className="flex gap-3">
                <Bug className="text-red-500" />
                <span><strong>Impact:</strong> {item.impact}</span>
              </p>

              <p className="flex gap-3">
                <ShieldCheck className="text-green-600" />
                <span><strong>Prevention:</strong> {item.prevention}</span>
              </p>

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
