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
  BookMarked
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function EducationPage() {
  const [activeMaterial, setActiveMaterial] = useState<number | null>(null);
  
  // Mock data for educational materials
  const materials = [
    {
      id: 1,
      title: "Jenis Plastik dan Pemilahan",
      description: "Pelajari jenis-jenis plastik dan cara memilahnya dengan benar",
      points: 10,
      duration: "5 min",
      completed: true,
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
        
        <div class="bg-green-50 p-4 rounded-lg mt-4">
          <h4 class="font-semibold flex items-center"><Leaf className="w-5 h-5 mr-2 text-green-600" /> Tips Ekstra</h4>
          <p class="mt-2">Jangan memilah plastik basah dengan plastik kering. Pisahkan terlebih dahulu agar proses daur ulang lebih efektif.</p>
        </div>
      `,
      icon: Recycle,
    },
    {
      id: 2,
      title: "Dampak Sampah terhadap Lingkungan",
      description: "Kenali dampak buruk dari penanganan sampah yang tidak tepat",
      points: 15,
      duration: "7 min",
      completed: true,
      content: `
        <h2 class="text-2xl font-bold mb-4 text-green-700">Dampak Sampah terhadap Lingkungan</h2>
        <p class="mb-4">Sampah yang tidak dikelola dengan baik akan menimbulkan berbagai dampak negatif terhadap lingkungan dan kesehatan manusia.</p>
        
        <h3 class="text-xl font-semibold mb-2 mt-4">Dampak terhadap Lingkungan</h3>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Pencemaran air</strong> - Sampah yang dibuang ke sungai atau laut merusak ekosistem perairan</li>
          <li class="mb-2"><strong>Pencemaran udara</strong> - Pembakaran sampah menghasilkan gas berbahaya</li>
          <li class="mb-2"><strong>Pencemaran tanah</strong> - Sampah yang tertimbun menyebabkan tanah tercemar</li>
          <li class="mb-2"><strong>Mengganggu ekosistem</strong> - Sampah mengganggu habitat alami makhluk hidup</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-2 mt-4">Dampak terhadap Kesehatan</h3>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Menjadi sarang penyakit karena menarik perhatian hewan pembawa penyakit</li>
          <li class="mb-2">Meningkatkan risiko penyakit kulit dan pernapasan</li>
          <li class="mb-2">Menyebabkan masalah pencernaan jika terkonsumsi</li>
        </ul>
        
        <div class="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
          <h4 class="font-semibold flex items-center"><Award className="w-5 h-5 mr-2 text-amber-600" /> Fakta Menarik</h4>
          <p class="mt-2">Plastik membutuhkan waktu 450 tahun untuk terurai secara alami. Satu kantong plastik bisa digunakan hanya 15 menit, tapi akan bertahan di lingkungan selama ratusan tahun.</p>
        </div>
      `,
      icon: Leaf,
    },
    {
      id: 3,
      title: "Manfaat Bank Sampah",
      description: "Temukan manfaat dari mengelola sampah melalui Bank Sampah",
      points: 12,
      duration: "6 min",
      completed: false,
      content: `
        <h2 class="text-2xl font-bold mb-4 text-green-700">Manfaat Bank Sampah</h2>
        <p class="mb-4">Bank Sampah adalah tempat pengumpulan, pemilahan dan pengolahan sampah secara swadaya masyarakat yang dikelola secara lembaga atau koperasi.</p>
        
        <h3 class="text-xl font-semibold mb-2 mt-4">Manfaat bagi Masyarakat</h3>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Ekonomi</strong> - Pendapatan tambahan dari hasil penjualan sampah</li>
          <li class="mb-2"><strong>Pendidikan</strong> - Meningkatkan kesadaran masyarakat tentang pengelolaan sampah</li>
          <li class="mb-2"><strong>Kesehatan</strong> - Lingkungan lebih bersih dan sehat</li>
          <li class="mb-2"><strong>Sosial</strong> - Meningkatkan semangat gotong royong dan kebersamaan</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-2 mt-4">Cara Berlangganan Bank Sampah</h3>
        <ol class="list-decimal pl-6 mb-4">
          <li class="mb-2">Daftar di Bank Sampah terdekat</li>
          <li class="mb-2">Dapatkan buku tabungan Bank Sampah</li>
          <li class="mb-2">Setor sampah secara rutin sesuai jadwal</li>
          <li class="mb-2">Dapatkan poin/saldo sesuai dengan berat atau jenis sampah</li>
        </ol>
        
        <div class="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
          <h4 class="font-semibold flex items-center"><Users className="w-5 h-5 mr-2 text-blue-600" /> Fakta Sosial</h4>
          <p class="mt-2">Lebih dari 5.000 Bank Sampah telah beroperasi di seluruh Indonesia, berkontribusi besar dalam mengurangi volume sampah dan meningkatkan pendapatan masyarakat.</p>
        </div>
      `,
      icon: Users,
    },
  ];

  const startQuiz = (materialId: number) => {
    alert(`Memulai kuis untuk materi: ${materials.find(m => m.id === materialId)?.title}`);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-green-600" />
            Materi Edukasi
          </h1>
          <p className="text-muted-foreground">Pelajari tentang pengelolaan sampah dan lingkungan</p>
        </div>

        {activeMaterial === null ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material) => {
                const IconComponent = material.icon;
                return (
                  <Card 
                    key={material.id} 
                    className={`hover:shadow-md transition-shadow cursor-pointer ${activeMaterial === material.id ? 'ring-2 ring-green-500' : ''}`}
                    onClick={() => setActiveMaterial(material.id)}
                  >
                    <CardHeader>
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                          <IconComponent className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{material.title}</CardTitle>
                          <div className="flex items-center mt-1">
                            <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs">
                              +{material.points} poin
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{material.duration}</span>
                        </div>
                        {material.completed ? (
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                            <span className="text-xs text-green-600">Selesai</span>
                          </div>
                        ) : (
                          <Button size="sm" className="bg-green-500 hover:bg-green-600">
                            Mulai Belajar
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Progres Belajar</h2>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Progres Keseluruhan</span>
                    <span className="text-sm text-muted-foreground">2 dari 3 materi</span>
                  </div>
                  <Progress value={66.67} className="h-2" />
                  <div className="mt-4 text-center">
                    <p className="font-medium">+25 poin telah Anda peroleh dari materi yang dipelajari</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div>
            <Button 
              variant="outline" 
              className="mb-4"
              onClick={() => setActiveMaterial(null)}
            >
              ← Kembali ke Daftar Materi
            </Button>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {materials.find(m => m.id === activeMaterial)?.title}
                </CardTitle>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300">
                      +{materials.find(m => m.id === activeMaterial)?.points} poin
                    </Badge>
                    <div className="flex items-center ml-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{materials.find(m => m.id === activeMaterial)?.duration}</span>
                    </div>
                  </div>
                  <Button 
                    className="bg-amber-500 hover:bg-amber-600"
                    onClick={() => startQuiz(activeMaterial)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Kerjakan Kuis
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-green max-w-none"
                  dangerouslySetInnerHTML={{ __html: materials.find(m => m.id === activeMaterial)?.content || '' }}
                />
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </MainLayout>
  );
}