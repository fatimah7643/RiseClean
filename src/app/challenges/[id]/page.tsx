"use client";

import { useState } from "react";
import MainLayout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Calendar,
  MapPin,
  Coins,
  Camera,
  Upload,
  Clock,
  CheckCircle,
  XCircle,
  ArrowLeft
} from "lucide-react";

export default function ChallengeDetailPage() {
  const [currentStep, setCurrentStep] = useState(1); // 1: detail, 2: take action, 3: submit proof
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Mock challenge data
  const challenge = {
    id: 2,
    title: "Jual ke Bank Sampah",
    description: "Bawa sampah yang sudah dipilah ke Bank Sampah terdekat",
    points: 50,
    difficulty: "medium",
    deadline: "3 hari lagi",
    requirements: [
      "Pisahkan sampah organik dan anorganik terlebih dahulu",
      "Bawa ke Bank Sampah terdekat",
      "Ambil struk bukti penyetoran",
      "Upload foto struk tersebut sebagai bukti"
    ],
    tips: [
      "Gunakan kantong yang rapi dan terpisah",
      "Catat berapa kilogram sampah yang Anda setor",
      "Ambil struk sebagai bukti transaksi"
    ]
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file.name);
      
      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitProof = () => {
    alert("Bukti tantangan berhasil diunggah dan menunggu verifikasi");
    setCurrentStep(1); // Reset to first step
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        {currentStep === 1 && (
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
                  <Badge 
                    variant="outline" 
                    className={
                      challenge.difficulty === "easy" 
                        ? "border-green-200 text-green-700 dark:text-green-300" 
                        : challenge.difficulty === "medium"
                          ? "border-amber-200 text-amber-700 dark:text-amber-300"
                          : "border-red-200 text-red-700 dark:text-red-300"
                    }
                  >
                    {challenge.difficulty === "easy" ? "Mudah" : 
                     challenge.difficulty === "medium" ? "Sedang" : "Sulit"}
                  </Badge>
                  <Badge variant="secondary" className="bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300">
                    +{challenge.points} poin
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{challenge.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Persyaratan Tantangan:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {challenge.requirements.map((req, index) => (
                      <li key={index} className="text-sm">{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Tips Sukses:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {challenge.tips.map((tip, index) => (
                      <li key={index} className="text-sm">{tip}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Batas waktu: {challenge.deadline}</span>
                </div>
                
                <Button 
                  className="w-full bg-amber-500 hover:bg-amber-600"
                  onClick={() => setCurrentStep(2)}
                >
                  Mulai Tantangan
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
        
        {currentStep === 2 && (
          <div>
            <Button 
              variant="outline" 
              className="mb-4"
              onClick={() => setCurrentStep(1)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Lakukan Tantangan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground mb-6">Lakukan tindakan sesuai tantangan yang telah dipilih</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <h4 className="font-medium">Persiapan</h4>
                      <p className="text-sm text-muted-foreground">Siapkan sampah yang akan disetor</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <h4 className="font-medium">Aksi</h4>
                      <p className="text-sm text-muted-foreground">Bawa ke Bank Sampah terdekat</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <h4 className="font-medium">Bukti</h4>
                      <p className="text-sm text-muted-foreground">Ambil bukti transaksi</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    Setelah selesai, unggah bukti transaksi sebagai konfirmasi bahwa Anda telah menyelesaikan tantangan
                  </p>
                  
                  <Button 
                    className="bg-green-500 hover:bg-green-600"
                    onClick={() => setCurrentStep(3)}
                  >
                    Saya Telah Menyelesaikan Tantangan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        {currentStep === 3 && (
          <div>
            <Button 
              variant="outline" 
              className="mb-4"
              onClick={() => setCurrentStep(2)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Unggah Bukti Tantangan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <p className="text-muted-foreground">Upload foto struk sebagai bukti bahwa Anda telah menyelesaikan tantangan</p>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center mb-6">
                  {imagePreview ? (
                    <div>
                      <img 
                        src={imagePreview} 
                        alt="Preview bukti" 
                        className="max-h-64 mx-auto rounded-lg"
                      />
                      <p className="mt-2 text-sm text-muted-foreground">{selectedImage}</p>
                    </div>
                  ) : (
                    <div>
                      <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                      <p className="text-muted-foreground mb-3">Klik untuk mengunggah foto bukti</p>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange}
                        className="hidden" 
                        id="image-upload"
                      />
                      <label 
                        htmlFor="image-upload"
                        className="cursor-pointer inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Pilih Foto
                      </label>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <XCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-300 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      <strong>Perhatian:</strong> Pastikan foto bukti terbaca dengan jelas, menunjukkan tanggal dan jumlah sampah yang disetor.
                    </p>
                  </div>
                  
                  <div className="flex items-start p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-300 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Panduan:</strong> Foto harus menunjukkan struk transaksi dari Bank Sampah dengan jelas.
                    </p>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-green-500 hover:bg-green-600"
                  onClick={submitProof}
                  disabled={!selectedImage}
                >
                  Kirim Bukti Tantangan
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </MainLayout>
  );
}