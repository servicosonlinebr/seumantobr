"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ShoppingCart, X, Check } from "lucide-react";

// ===================== TIPOS =====================
type SizeType = "P" | "M" | "G" | "GG";
type PackageType = "duo-2m" | "duo-2f" | "duo-1m1f" | "single";

interface CartItem {
  id: string;
  type: PackageType;
  sizes: SizeType[];
  price: number;
}

interface DeliveryData {
  fullName: string;
  cpf: string;
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  phone: string;
  gift: boolean;
}

// ===================== COUNTDOWN TIMER =====================
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-bold animate-pulse">
      <span className="text-lg">⏱️</span>
      {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </div>
  );
};

// ===================== HERO SECTION =====================
const HeroSection = () => {
  const playGolSound = () => {
    // Audio do Galvão Bueno
    const audio = new Audio(
      "https://cdn.pixabay.com/media/resources/mp3/ambience/151671_horn-cheer_01.mp3"
    );
    audio.play().catch(() => console.log("Audio autoplay blocked"));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full bg-gradient-to-b from-green-900 via-green-800 to-yellow-600 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* LIMITED TIME BANNER */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="text-white text-sm sm:text-base font-bold tracking-widest uppercase">
            ⚡ POR TEMPO LIMITADO
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-sm">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-green-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

              {/* Main image with shadow */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/20">
                <img
                  src="https://ibb.co/gFtcGtCv"
                  alt="Camisa Seleção Brasileira"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg"
              >
                OFICIAL
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white space-y-6 sm:space-y-8"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                CAMISA OFICIAL
                <br />
                <span className="text-yellow-300">COPA DO BRASIL</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Vista a paixão da nação. Qualidade premium com o design icônico da
                seleção brasileira. Tecido respirável e durável para máximo conforto.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                "✓ Tecido 100% Poliéster Premium",
                "✓ Respirável e Confortável",
                "✓ Frete Grátis - Flash Delivery",
                "✓ Entrega em até 3 dias úteis",
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex items-center gap-3 text-sm sm:text-base font-semibold"
                >
                  <span className="text-2xl">{feature.substring(0, 1)}</span>
                  {feature.substring(1)}
                </motion.div>
              ))}
            </div>

            {/* CTA Button with Timer */}
            <motion.button
              onClick={playGolSound}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg sm:text-xl font-black py-4 sm:py-5 rounded-xl shadow-2xl transition-all group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 animate-pulse"></div>
              <div className="relative flex items-center justify-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                <span>COMPRAR AGORA</span>
              </div>
              <div className="absolute -bottom-1 left-0 right-0 flex justify-center">
                <span className="text-xs font-bold opacity-80">
                  {/* GOL DO BRASIL - Galvão Bueno voice will play on click */}
                  🔊 GOLLLLL!
                </span>
              </div>
            </motion.button>

            {/* Timer Info */}
            <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <span className="text-sm font-semibold">Promoção Expira Em:</span>
              <CountdownTimer />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// ===================== CATALOG SECTION =====================
const CatalogSection = () => {
  const catalogImages = [
    { src: "https://ibb.co/r24xzb7M", alt: "Camisa Vista Frontal" },
    { src: "https://ibb.co/PGG6Tf79", alt: "Camisa Vista Costas" },
    { src: "https://ibb.co/wNP6pK1y", alt: "Camisa Detalhe Gola" },
    { src: "https://ibb.co/8LCj3Pfs", alt: "Camisa Detalhe Manga" },
    { src: "https://ibb.co/Q7ksRWvM", alt: "Camisa Casal 1" },
    { src: "https://ibb.co/678T42rp", alt: "Camisa Casal 2" },
    { src: "https://ibb.co/B5CnVnjV", alt: "Camisa Medidas P" },
    { src: "https://ibb.co/r2DrL2wN", alt: "Camisa Medidas M" },
    { src: "https://ibb.co/bMzkBKnt", alt: "Camisa Medidas G" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-black text-white text-center mb-4"
        >
          GALERIA <span className="text-yellow-400">COMPLETA</span>
        </motion.h2>

        <p className="text-white/70 text-center mb-12 sm:mb-16 text-lg">
          Conheça cada detalhe da camisa oficial
        </p>

        {/* Grid de imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {catalogImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Sombra decorativa */}
              <div className="absolute -inset-2 bg-gradient-to-b from-green-500/20 to-yellow-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Card com imagem */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// ===================== SIZE GUIDE & 3D SIMULATOR =====================
const SizeGuideSection = () => {
  const [selectedSize, setSelectedSize] = useState<SizeType>("M");
  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");

  const sizes: Record<SizeType, { height: string; weight: string; chest: string }> =
    {
      P: { height: "155-165cm", weight: "50-60kg", chest: "85-90cm" },
      M: { height: "165-175cm", weight: "60-75kg", chest: "90-95cm" },
      G: { height: "175-185cm", weight: "75-90kg", chest: "95-102cm" },
      GG: { height: "185-195cm", weight: "90-110kg", chest: "102-110cm" },
    };

  const recommendSize = () => {
    const height = parseInt(userHeight);
    const weight = parseInt(userWeight);

    if (!height || !weight) return null;

    if (height < 170 && weight < 70) return "P";
    if (height < 180 && weight < 85) return "M";
    if (height < 190 && weight < 100) return "G";
    return "GG";
  };

  const recommended = recommendSize();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-black text-white text-center mb-12 sm:mb-16">
          GUIA DE <span className="text-yellow-400">TAMANHOS</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 3D Model Simulator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-900/30 to-yellow-900/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl"
          >
            <div className="aspect-square bg-slate-800 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
              {/* 3D-like representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-yellow-500/5"></div>
              <svg
                className="w-48 h-48 sm:w-64 sm:h-64 text-white"
                viewBox="0 0 100 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simple 3D figure */}
                <circle cx="50" cy="15" r="10" fill="currentColor" />
                <rect x="40" y="28" width="20" height="35" fill="currentColor" />
                <rect x="20" y="35" width="15" height="40" fill="currentColor" />
                <rect x="65" y="35" width="15" height="40" fill="currentColor" />
                <rect x="35" y="68" width="12" height="50" fill="currentColor" />
                <rect x="53" y="68" width="12" height="50" fill="currentColor" />
              </svg>
            </div>

            <div className="space-y-4">
              <p className="text-white font-semibold text-center">
                Tamanho Selecionado: <span className="text-yellow-400 text-xl">{selectedSize}</span>
              </p>

              <div className="flex gap-2 sm:gap-3 justify-center flex-wrap">
                {(["P", "M", "G", "GG"] as SizeType[]).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg font-bold transition-all ${
                      selectedSize === size
                        ? "bg-yellow-400 text-black shadow-lg scale-105"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="bg-white/5 rounded-lg p-4 text-white text-sm sm:text-base space-y-2">
                <p>
                  <span className="font-semibold text-yellow-400">Altura:</span>{" "}
                  {sizes[selectedSize].height}
                </p>
                <p>
                  <span className="font-semibold text-yellow-400">Peso:</span>{" "}
                  {sizes[selectedSize].weight}
                </p>
                <p>
                  <span className="font-semibold text-yellow-400">Peito:</span>{" "}
                  {sizes[selectedSize].chest}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-900/30 to-green-900/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Calculadora de <span className="text-yellow-400">Tamanho</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Sua Altura (cm)
                </label>
                <input
                  type="number"
                  value={userHeight}
                  onChange={(e) => setUserHeight(e.target.value)}
                  placeholder="Ex: 175"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Seu Peso (kg)
                </label>
                <input
                  type="number"
                  value={userWeight}
                  onChange={(e) => setUserWeight(e.target.value)}
                  placeholder="Ex: 75"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {recommended && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg p-4 text-black"
                >
                  <p className="font-black text-lg text-center">
                    Tamanho Recomendado: <span className="text-2xl">{recommended}</span>
                  </p>
                </motion.div>
              )}

              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-3 rounded-lg transition-all hover:shadow-lg">
                Ver Mais Tamanhos
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// ===================== PRICING SECTION =====================
const PricingSection = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const packages = [
    {
      id: "duo-2m",
      name: "2 CAMISAS MASCULINAS",
      description: "Combo especial para o casal",
      oldPrice: 199.99,
      price: 119.99,
      sizes: ["P", "M", "G", "GG"],
      badge: "MELHOR PROMOÇÃO",
    },
    {
      id: "duo-2f",
      name: "2 CAMISAS FEMININAS",
      description: "Combo especial para o casal",
      oldPrice: 199.99,
      price: 119.99,
      sizes: ["P", "M", "G", "GG"],
      badge: "MELHOR PROMOÇÃO",
    },
    {
      id: "duo-1m1f",
      name: "1 MASCULINA + 1 FEMININA",
      description: "Combo perfeito para casais",
      oldPrice: 199.99,
      price: 119.99,
      sizes: ["P", "M", "G", "GG"],
      badge: "MAIS VENDIDO",
    },
    {
      id: "single",
      name: "1 CAMISA ÚNICA",
      description: "Escolha seu tamanho",
      oldPrice: 99.99,
      price: 74.99,
      sizes: ["P", "M", "G", "GG"],
      badge: "ECONÔMICO",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-black text-white text-center mb-12 sm:mb-16">
          ESCOLHA SEU <span className="text-yellow-400">PACOTE</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-yellow-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl h-full flex flex-col">
                {/* Badge */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs sm:text-sm font-black px-3 py-1 rounded-full shadow-lg">
                    {pkg.badge}
                  </span>
                </motion.div>

                <div className="mt-4 mb-4 flex-1">
                  <h3 className="text-white font-black text-sm sm:text-base mb-2 line-clamp-2">
                    {pkg.name}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm mb-4">
                    {pkg.description}
                  </p>

                  {/* Sizes */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {pkg.sizes.map((size) => (
                      <span
                        key={size}
                        className="text-xs bg-white/10 text-white px-2 py-1 rounded"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-white/50 line-through text-sm">
                      R$ {pkg.oldPrice.toFixed(2)}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-yellow-400">
                      R$ {pkg.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-green-400 text-xs sm:text-sm font-bold">
                    Economia de R$ {(pkg.oldPrice - pkg.price).toFixed(2)}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    setCart([...cart, { id: pkg.id, type: pkg.id as PackageType, sizes: ["M"], price: pkg.price }]);
                    setShowCheckout(true);
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-black font-black py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  COMPRAR
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefit Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600/20 to-yellow-600/20 border border-green-500/30 rounded-xl p-6 sm:p-8 backdrop-blur-md"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "🚚", text: "Frete Grátis" },
              { icon: "⚡", text: "Flash Delivery" },
              { icon: "📦", text: "3 Dias Úteis" },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-3xl sm:text-4xl mb-2 block">{benefit.icon}</span>
                <p className="text-white font-bold text-sm sm:text-base">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ===================== CHECKOUT FORM =====================
const CheckoutForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [deliveryData, setDeliveryData] = useState<DeliveryData>({
    fullName: "",
    cpf: "",
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    phone: "",
    gift: false,
  });

  const [step, setStep] = useState(1);

  const handleChange = (field: keyof DeliveryData, value: any) => {
    setDeliveryData({ ...deliveryData, [field]: value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-2xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-green-900 to-yellow-900 px-6 py-4 flex items-center justify-between border-b border-white/10">
          <h3 className="text-white font-black text-lg sm:text-xl">
            {step === 1 ? "ENTREGA" : "PAGAMENTO"}
          </h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/10 p-2 rounded-lg transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {step === 1 ? (
            <>
              {/* DELIVERY FORM */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    value={deliveryData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className="col-span-1 sm:col-span-2 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400"
                  />
                  <input
                    type="text"
                    placeholder="CPF (00000000000)"
                    value={deliveryData.cpf}
                    onChange={(e) => handleChange("cpf", e.target.value)}
                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400"
                  />
                  <input
                    type="text"
                    placeholder="Telefone (11999999999)"
                    value={deliveryData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400"
                  />
                  <input
                    type="text"
                    placeholder="CEP (00000000)"
                    value={deliveryData.cep}
                    onChange={(e) => handleChange("cep", e.target.value)}
                    className="col-span-1 sm:col-span-2 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400"
                  />
                  <input
                    type="text"
                    placeholder="Rua"
                    value={deliveryData.street}
                    onChange={(e) => handleChange("street", e.target.value)}
                    className="sm:col-span-2 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400"
                  />
                  <input
                    type="text"
                    placeholder="Número"
                    value={deliveryData.number}
                    onChange={(e) => handleChange("number", e.target.value)}
                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400"
                  />
                  <input
                    type="text"
                    placeholder="Bairro"
                    value={deliveryData.neighborhood}
                    onChange={(e) => handleChange("neighborhood", e.target.value)}
                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400"
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    value={deliveryData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400"
                  />
                  <select
                    value={deliveryData.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                  >
                    <option value="">Selecione o Estado</option>
                    <option value="SP">SP</option>
                    <option value="RJ">RJ</option>
                    <option value="MG">MG</option>
                    <option value="BA">BA</option>
                    <option value="PR">PR</option>
                    <option value="RS">RS</option>
                  </select>
                </div>

                {/* Gift Option */}
                <label className="flex items-center gap-3 cursor-pointer bg-white/5 border border-white/20 rounded-lg p-4">
                  <input
                    type="checkbox"
                    checked={deliveryData.gift}
                    onChange={(e) => handleChange("gift", e.target.checked)}
                    className="w-5 h-5"
                  />
                  <span className="text-white font-semibold">
                    Embrulhar para Presente
                  </span>
                </label>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={onClose}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-lg transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 bg-gradient-to-r from-green-500 to-yellow-500 text-black font-black py-3 rounded-lg hover:shadow-lg transition"
                >
                  Próximo: Pagamento
                </button>
              </div>
            </>
          ) : (
            <>
              {/* PAYMENT STEP */}
              <div className="text-center space-y-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <p className="text-white/70 text-sm mb-2">TOTAL A PAGAR</p>
                  <p className="text-4xl font-black text-yellow-400">R$ 119,99</p>
                </div>

                <p className="text-white/70 text-sm">
                  Você será redirecionado para nossa plataforma de pagamento segura
                </p>

                {/* Payment buttons for both options */}
                <div className="space-y-3">
                  <a
                    href="https://pay.lowify.com.br/checkout?product_id=Fsuvdd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-green-500 to-yellow-500 text-black font-black py-4 rounded-lg hover:shadow-lg transition"
                  >
                    💳 PAGAR AGORA (2 Camisas)
                  </a>
                  <a
                    href="https://pay.lowify.com.br/checkout?product_id=txbM2s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-green-500 to-yellow-500 text-black font-black py-4 rounded-lg hover:shadow-lg transition"
                  >
                    💳 PAGAR AGORA (1 Camisa)
                  </a>
                </div>
              </div>

              {/* Back Button */}
              <button
                onClick={() => setStep(1)}
                className="w-full text-white font-semibold py-3 hover:bg-white/10 rounded-lg transition"
              >
                ← Voltar
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// ===================== MAIN APP =====================
export default function BrasilShirtsStore() {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="w-full bg-slate-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-black text-yellow-400">
            🇧🇷 COPA BRASIL
          </h1>
          <button
            onClick={() => setShowCheckout(true)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition-all"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">COMPRAR</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <HeroSection />
        <CatalogSection />
        <SizeGuideSection />
        <PricingSection />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-white/10 py-8 text-center text-white/60 text-sm"
        >
          <p>© 2024 Copa do Brasil. Todos os direitos reservados. 🇧🇷</p>
        </motion.footer>
      </div>

      {/* Checkout Modal */}
      <CheckoutForm isOpen={showCheckout} onClose={() => setShowCheckout(false)} />
    </div>
  );
}
