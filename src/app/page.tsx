"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import MainLayout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Target,
  TrendingUp,
  Shield,
  Lightbulb,
  Leaf,
  Recycle,
  Users,
  Award,
  Coins
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Mock data for educational materials
  const educationalMaterials = [
    {
      id: 1,
      title: "Jenis Plastik dan Pemilahan",
      description: "Pelajari jenis-jenis plastik dan cara memilahnya dengan benar",
      points: 10,
      icon: Recycle,
    },
    {
      id: 2,
      title: "Dampak Sampah terhadap Lingkungan",
      description: "Kenali dampak buruk dari penanganan sampah yang tidak tepat",
      points: 15,
      icon: Leaf,
    },
    {
      id: 3,
      title: "Manfaat Bank Sampah",
      description: "Temukan manfaat dari mengelola sampah melalui Bank Sampah",
      points: 12,
      icon: Users,
    },
  ];

  // Mock data for daily challenges
  const dailyChallenges = [
    {
      id: 1,
      title: "Pisahkan Sampah Organik dan Anorganik",
      description: "Pisahkan sampah rumah tangga Anda hari ini",
      points: 20,
      difficulty: "easy",
    },
    {
      id: 2,
      title: "Jual ke Bank Sampah",
      description: "Bawa sampah yang sudah dipilah ke Bank Sampah terdekat",
      points: 50,
      difficulty: "medium",
    },
    {
      id: 3,
      title: "Edukasi Tetangga",
      description: "Ajak tetangga Anda untuk memilah sampah",
      points: 30,
      difficulty: "medium",
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-4 py-2 rounded-full mb-4">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Sampah menjadi Berkah</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent mb-2">
            Selamat Datang di RiseClean
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Platform edukasi kebersihan berbasis web yang bertujuan meningkatkan partisipasi masyarakat dalam pengelolaan sampah melalui pendekatan gamifikasi.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-green-500 p-3 rounded-lg mr-4">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Poin Anda</p>
                <p className="text-2xl font-bold">125</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pencapaian</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-amber-500 p-3 rounded-lg mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tantangan</p>
                <p className="text-2xl font-bold">7</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-emerald-500 p-3 rounded-lg mr-4">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Hari Hijau</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Educational Materials */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-green-600" />
              Materi Edukasi
            </h2>
            <Link href="/education" className="text-sm text-green-600 hover:underline">
              Lihat Semua
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {educationalMaterials.map((material) => {
              const IconComponent = material.icon;
              return (
                <Card key={material.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                        <IconComponent className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{material.title}</CardTitle>
                        <div className="flex items-center mt-1">
                          <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300">
                            +{material.points} poin
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                    <div className="flex justify-between items-center">
                      <Link href={`/education/${material.id}`}>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600">
                          Baca Sekarang
                        </Button>
                      </Link>
                      <Badge variant="outline" className="text-xs">Belum Selesai</Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Daily Challenges */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <Target className="w-5 h-5 mr-2 text-amber-600" />
              Tantangan Harian
            </h2>
            <Link href="/challenges" className="text-sm text-amber-600 hover:underline">
              Lihat Semua
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dailyChallenges.map((challenge) => (
              <Card key={challenge.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>{challenge.title}</span>
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
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{challenge.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Coins className="w-4 h-4 text-amber-500 mr-1" />
                      <span className="font-medium">+{challenge.points} poin</span>
                    </div>
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                      Ambil Tantangan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-600" />
            Dampak Komunitas
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 mb-4 md:mb-0 md:pr-6">
                  <h3 className="text-lg font-semibold mb-2">Bersama Kita Wujudkan Lingkungan Lebih Bersih</h3>
                  <p className="text-muted-foreground mb-4">
                    Setiap tindakan kecil Anda berkontribusi pada perubahan besar bagi lingkungan.
                    Bergabunglah dengan ribuan pengguna lain yang peduli lingkungan.
                  </p>
                  <div className="flex space-x-6">
                    <div>
                      <p className="text-2xl font-bold text-green-600">1.250+</p>
                      <p className="text-sm text-muted-foreground">Pengguna Aktif</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-amber-600">5.6 ton</p>
                      <p className="text-sm text-muted-foreground">Sampah Terkelola</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">45</p>
                      <p className="text-sm text-muted-foreground">Bank Sampah</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 w-full md:w-auto">
                  <div className="flex items-center justify-center">
                    <Lightbulb className="w-16 h-16 text-green-500" />
                  </div>
                  <p className="text-center mt-2 font-medium">Mulai dari diri sendiri, ubah lingkungan sekitar</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sign in message for unauthenticated users */}
        <SignedOut>
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-2">Bergabunglah dengan Kami</h2>
            <p className="text-muted-foreground mb-4">Bantu lingkungan dengan pengelolaan sampah yang baik</p>
            <SignInButton>
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                Daftar Sekarang
              </Button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    </MainLayout>
  );
}
