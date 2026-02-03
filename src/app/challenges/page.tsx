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
  XCircle
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ChallengesPage() {
  const [activeTab, setActiveTab] = useState("active");

  // Mock data for challenges
  const challenges = [
    {
      id: 1,
      title: "Pisahkan Sampah Organik dan Anorganik",
      description: "Pisahkan sampah rumah tangga Anda hari ini",
      points: 20,
      difficulty: "easy",
      deadline: "Hari ini",
      status: "active", // active, completed, expired
    },
    {
      id: 2,
      title: "Jual ke Bank Sampah",
      description: "Bawa sampah yang sudah dipilah ke Bank Sampah terdekat",
      points: 50,
      difficulty: "medium",
      deadline: "3 hari lagi",
      status: "active",
    },
    {
      id: 3,
      title: "Edukasi Tetangga",
      description: "Ajak tetangga Anda untuk memilah sampah",
      points: 30,
      difficulty: "medium",
      deadline: "1 minggu lagi",
      status: "available",
    },
    {
      id: 4,
      title: "Kreasi dari Barang Bekas",
      description: "Buat kerajinan dari barang bekas di rumah",
      points: 40,
      difficulty: "hard",
      deadline: "2 minggu lagi",
      status: "available",
    },
  ];

  // Mock data for submitted challenges
  const submissions = [
    {
      id: 1,
      challengeId: 2,
      challengeTitle: "Jual ke Bank Sampah",
      submissionDate: "2023-05-15",
      status: "pending", // pending, approved, rejected
      proofImageUrl: "/placeholder-proof.jpg",
    },
    {
      id: 2,
      challengeId: 1,
      challengeTitle: "Pisahkan Sampah Organik dan Anorganik",
      submissionDate: "2023-05-10",
      status: "approved",
      proofImageUrl: "/placeholder-proof.jpg",
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <Target className="w-6 h-6 mr-2 text-amber-600" />
            Tantangan Komunitas
          </h1>
          <p className="text-muted-foreground">Ambil tantangan harian dan dapatkan poin</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Aktif</TabsTrigger>
            <TabsTrigger value="submissions">Pengajuan</TabsTrigger>
            <TabsTrigger value="history">Riwayat</TabsTrigger>
          </TabsList>
        </Tabs>

        {activeTab === "active" && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Tantangan Harian</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {challenges
                  .filter(challenge => challenge.status === "active" || challenge.status === "available")
                  .map((challenge) => (
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
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center">
                            <Coins className="w-4 h-4 text-amber-500 mr-1" />
                            <span className="font-medium">+{challenge.points} poin</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{challenge.deadline}</span>
                          </div>
                        </div>
                        {challenge.status === "active" ? (
                          <Button 
                            className="w-full bg-amber-500 hover:bg-amber-600"
                            onClick={() => alert(`Mengambil tantangan: ${challenge.title}`)}
                          >
                            Ambil Tantangan
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => alert(`Menyelesaikan tantangan: ${challenge.title}`)}
                          >
                            Selesaikan
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Cara Mengikuti Tantangan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <h3 className="font-semibold mb-1">Pilih Tantangan</h3>
                    <p className="text-sm text-muted-foreground">Pilih tantangan yang sesuai dengan kemampuan Anda</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <h3 className="font-semibold mb-1">Lakukan Aksi</h3>
                    <p className="text-sm text-muted-foreground">Lakukan tindakan sesuai tantangan yang diambil</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <h3 className="font-semibold mb-1">Unggah Bukti</h3>
                    <p className="text-sm text-muted-foreground">Upload foto sebagai bukti pelaksanaan tugas</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === "submissions" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Pengajuan Tantangan</h2>
            <div className="space-y-4">
              {submissions.map((submission) => (
                <Card key={submission.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className="bg-gray-100 border-2 border-dashed rounded-xl w-16 h-16" />
                      <div className="ml-4 flex-1">
                        <h3 className="font-semibold">{submission.challengeTitle}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>Diajukan {submission.submissionDate}</span>
                        </div>
                        <div className="mt-2">
                          <Badge 
                            variant="outline"
                            className={
                              submission.status === "approved" 
                                ? "border-green-200 text-green-700 dark:text-green-300" 
                                : submission.status === "rejected"
                                  ? "border-red-200 text-red-700 dark:text-red-300"
                                  : "border-amber-200 text-amber-700 dark:text-amber-300"
                            }
                          >
                            {submission.status === "approved" ? "Disetujui" : 
                             submission.status === "rejected" ? "Ditolak" : "Menunggu"}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Detail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {submissions.length === 0 && (
                <div className="text-center py-8">
                  <Target className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <h3 className="font-medium mb-1">Belum ada pengajuan</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ambil tantangan dan unggah bukti untuk memulai
                  </p>
                  <Button 
                    onClick={() => setActiveTab("active")}
                    className="bg-amber-500 hover:bg-amber-600"
                  >
                    Ambil Tantangan
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Riwayat Tantangan</h2>
            <div className="text-center py-8">
              <Target className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
              <h3 className="font-medium mb-1">Belum ada riwayat</h3>
              <p className="text-sm text-muted-foreground">
                Tantangan yang telah Anda selesaikan akan muncul di sini
              </p>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}