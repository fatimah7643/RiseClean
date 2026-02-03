"use client";

import { useState } from "react";
import MainLayout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen,
  Clock,
  Award,
  CheckCircle,
  Play,
  Users,
  Leaf,
  Recycle,
  ArrowLeft,
  RotateCcw
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function EducationDetailPage() {
  const [currentStep, setCurrentStep] = useState(1); // 1: material, 2: quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Array<number | null>>(Array(5).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [pointsEarned, setPointsEarned] = useState(0);

  // Mock education material data
  const material = {
    id: 1,
    title: "Jenis Plastik dan Pemilahan",
    description: "Pelajari jenis-jenis plastik dan cara memilahnya dengan benar",
    points: 10,
    duration: "5 min",
    completed: false,
    content: `
      <h2 class="text-2xl font-bold mb-4 text-green-700">Jenis Plastik dan Pemilahan</h2>
      <p class="mb-4">Plastik adalah bahan yang sangat umum digunakan dalam kehidupan sehari-hari. Namun, tidak semua plastik sama. Setiap jenis plastik memiliki karakteristik yang berbeda dan memerlukan perlakuan yang berbeda dalam proses daur ulang.</p>
      
      <h3 class="text-xl font-semibold mb-2 mt-4">Kode Jenis Plastik</h3>
      <p class="mb-4">Setiap plastik memiliki kode yang tertera dalam simbol segitiga dengan angka di tengah:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>1 (PET)</strong> - Digunakan untuk botol minum, botol minyak, dan wadah makanan</li>
        <li class="mb-2"><strong>2 (HDPE)</strong> - Digunakan untuk botol susu, botol deterjen, dan wadah makanan</li>
        <li class="mb-2"><strong>3 (PVC)</strong> - Digunakan untuk pipa, kabel listrik, dan mainan</li>
        <li class="mb-2"><strong>4 (LDPE)</strong> - Digunakan untuk kantong plastik, wadah makanan fleksibel</li>
        <li class="mb-2"><strong>5 (PP)</strong> - Digunakan untuk botol bayi, wadah makanan, dan aki mobil</li>
        <li class="mb-2"><strong>6 (PS)</strong> - Digunakan untuk mangkuk styrofoam, cangkir sekali pakai</li>
        <li class="mb-2"><strong>7 (Other)</strong> - Digunakan untuk polikarbonat, plastik campuran</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2 mt-4">Cara Memilah Plastik</h3>
      <ol class="list-decimal pl-6 mb-4">
        <li class="mb-2">Bersihkan semua plastik dari sisa makanan atau minuman</li>
        <li class="mb-2">Pisahkan berdasarkan jenis (lihat kode di bawah)</li>
        <li class="mb-2">Kumpulkan dalam wadah terpisah berdasarkan jenis plastik</li>
        <li class="mb-2">Bawa ke tempat penampungan atau Bank Sampah terdekat</li>
      </ol>
    `,
    icon: Recycle,
  };

  // Mock quiz data
  const quizQuestions = [
    {
      id: 1,
      question: "Apa kepanjangan dari kode plastik PET?",
      options: [
        "Polyethylene Terephthalate",
        "Polyester Type",
        "Plastic Eating Tupperware",
        "Polyethylene Thick"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Apa yang sebaiknya dilakukan sebelum memilah plastik?",
      options: [
        "Mewarnai plastik",
        "Membersihkan dari sisa makanan",
        "Mencampur dengan plastik lain",
        "Menimbun tanpa diproses"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Kode plastik manakah yang biasanya digunakan untuk botol susu?",
      options: [
        "1 (PET)",
        "2 (HDPE)",
        "3 (PVC)",
        "4 (LDPE)"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Berapa lama waktu yang dibutuhkan plastik untuk terurai secara alami?",
      options: [
        "10 tahun",
        "50 tahun",
        "450 tahun",
        "1000 tahun"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Apa manfaat dari memilah plastik?",
      options: [
        "Memudahkan proses daur ulang",
        "Membuat plastik lebih tebal",
        "Mengurangi warna plastik",
        "Membuat plastik lebih mahal"
      ],
      correctAnswer: 0
    }
  ];

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = () => {
    // Calculate score
    let correctCount = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / quizQuestions.length) * 100);
    const earnedPoints = score >= 70 ? material.points : 0;
    
    setPointsEarned(earnedPoints);
    setQuizCompleted(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(Array(5).fill(null));
    setQuizCompleted(false);
    setPointsEarned(0);
  };

  const completeMaterial = () => {
    alert(`Materi ${material.title} telah selesai dipelajari!`);
    // Here you would typically update the user's progress in the database
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        {currentStep === 1 ? (
          <div>
            <Button 
              variant="outline" 
              className="mb-4"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300">
                    +{material.points} poin
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{material.duration}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">{material.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-green max-w-none mb-6"
                  dangerouslySetInnerHTML={{ __html: material.content }}
                />
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold flex items-center">
                    <Leaf className="w-5 h-5 mr-2 text-green-600" /> 
                    Kesimpulan Penting
                  </h4>
                  <p className="mt-2">
                    Pemilahan plastik yang benar sangat penting untuk memastikan proses daur ulang berjalan efektif. 
                    Dengan memilah plastik sesuai jenisnya, kita membantu lingkungan dan meningkatkan nilai ekonomi dari sampah plastik.
                  </p>
                </div>
                
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600"
                  onClick={() => setCurrentStep(2)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Kerjakan Kuis
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : currentStep === 2 ? (
          <div>
            <Button 
              variant="outline" 
              className="mb-4"
              onClick={() => setCurrentStep(1)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
            
            {!quizCompleted ? (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">Kuis: {material.title}</CardTitle>
                    <Badge variant="outline">
                      {currentQuestion + 1}/{quizQuestions.length}
                    </Badge>
                  </div>
                  <div className="w-full">
                    <Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="h-2" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">
                      {quizQuestions[currentQuestion].question}
                    </h3>
                    
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          variant={selectedAnswers[currentQuestion] === index ? "default" : "outline"}
                          className="w-full justify-start"
                          onClick={() => handleAnswerSelect(currentQuestion, index)}
                        >
                          <span className="ml-2">{option}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      variant="outline"
                      onClick={handlePrevQuestion}
                      disabled={currentQuestion === 0}
                    >
                      Sebelumnya
                    </Button>
                    
                    {currentQuestion < quizQuestions.length - 1 ? (
                      <Button 
                        onClick={handleNextQuestion}
                        disabled={selectedAnswers[currentQuestion] === null}
                      >
                        Berikutnya
                      </Button>
                    ) : (
                      <Button 
                        onClick={submitQuiz}
                        disabled={selectedAnswers[currentQuestion] === null}
                      >
                        Selesaikan Kuis
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    {pointsEarned > 0 ? (
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <RotateCcw className="w-10 h-10 text-amber-600" />
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2">
                      {pointsEarned > 0 ? "Selamat! Kuis Selesai" : "Belum Lulus"}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {pointsEarned > 0 
                        ? `Anda memperoleh ${pointsEarned} poin dari kuis ini!` 
                        : "Nilai Anda belum mencapai 70%. Silakan coba lagi."}
                    </p>
                    
                    {pointsEarned > 0 && (
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4 inline-flex items-center">
                        <Award className="w-5 h-5 text-green-600 mr-2" />
                        <span className="font-medium">+{pointsEarned} Poin</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {pointsEarned > 0 ? (
                      <Button 
                        onClick={completeMaterial}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Selesai
                      </Button>
                    ) : (
                      <Button 
                        onClick={restartQuiz}
                        className="bg-amber-500 hover:bg-amber-600"
                      >
                        Coba Lagi
                      </Button>
                    )}
                    <Button 
                      variant="outline"
                      onClick={() => setCurrentStep(1)}
                    >
                      Kembali ke Materi
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : null}
      </div>
    </MainLayout>
  );
}