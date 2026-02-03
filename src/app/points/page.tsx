"use client";

import { useState } from "react";
import MainLayout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Coins,
  TrendingUp,
  Trophy,
  Target,
  BookOpen,
  Calendar,
  CheckCircle,
  Award,
  Sparkles
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PointsSystemPage() {
  const [activeTab, setActiveTab] = useState("how-to-earn");

  // Mock data for point earning activities
  const earningActivities = [
    { id: 1, name: "Membaca Materi Edukasi", points: 5, description: "Dapatkan poin untuk setiap materi yang Anda pelajari" },
    { id: 2, name: "Menyelesaikan Kuis", points: 10, description: "Dapatkan poin saat menyelesaikan kuis dengan nilai tinggi" },
    { id: 3, name: "Tantangan Harian", points: 20, description: "Dapatkan poin saat menyelesaikan tantangan harian" },
    { id: 4, name: "Tantangan Mingguan", points: 50, description: "Dapatkan poin lebih banyak untuk tantangan mingguan" },
    { id: 5, name: "Ajak Teman", points: 100, description: "Dapatkan poin saat teman Anda bergabung melalui referral Anda" },
    { id: 6, name: "Tantangan Spesial", points: 100, description: "Dapatkan poin ekstra untuk tantangan khusus" },
  ];

  // Mock data for badges
  const badges = [
    { id: 1, name: "Pejuang Sampah", description: "Selesaikan 5 tantangan", earned: true, icon: Target },
    { id: 2, name: "Ahli Edukasi", description: "Selesaikan 10 materi edukasi", earned: true, icon: BookOpen },
    { id: 3, name: "Pemilah Hebat", description: "Selesaikan 10 tantangan pemilahan", earned: false, icon: Target },
    { id: 4, name: "Duta Lingkungan", description: "Ajak 5 orang teman", earned: false, icon: Award },
    { id: 5, name: "Penyelamat Bumi", description: "Kumpulkan 5000 poin", earned: false, icon: Award },
    { id: 6, name: "Pendidik Muda", description: "Ajak 10 orang teman", earned: false, icon: BookOpen },
  ];

  // Mock data for point history
  const pointHistory = [
    { id: 1, activity: "Tantangan Harian", description: "Pisahkan Sampah Organik", points: 20, date: "2023-05-15", type: "earned" },
    { id: 2, activity: "Kuis", description: "Jenis Plastik", points: 10, date: "2023-05-14", type: "earned" },
    { id: 3, activity: "Tantangan Harian", description: "Jual ke Bank Sampah", points: 20, date: "2023-05-12", type: "earned" },
    { id: 4, activity: "Tukar Voucher", description: "Voucher Minyak Goreng", points: -500, date: "2023-05-10", type: "spent" },
    { id: 5, activity: "Materi Edukasi", description: "Dampak Sampah", points: 15, date: "2023-05-08", type: "earned" },
    { id: 6, activity: "Tantangan Mingguan", description: "Bikin Kompos", points: 50, date: "2023-05-05", type: "earned" },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <Coins className="w-6 h-6 mr-2 text-amber-600" />
            Sistem Poin & Hadiah
          </h1>
          <p className="text-muted-foreground">Pelajari cara mendapatkan dan menukarkan poin Anda</p>
        </div>

        {/* Current Points Display */}
        <div className="mb-6">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Poin Anda</p>
                <p className="text-3xl font-bold text-amber-600">1,350</p>
              </div>
              <div className="flex items-center">
                <Sparkles className="w-8 h-8 text-amber-500 mr-3" />
                <div className="bg-amber-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                  +75 poin baru
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="how-to-earn">Cara Mendapat Poin</TabsTrigger>
            <TabsTrigger value="badges">Pencapaian</TabsTrigger>
            <TabsTrigger value="history">Riwayat Poin</TabsTrigger>
          </TabsList>
        </Tabs>

        {activeTab === "how-to-earn" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Cara Mendapatkan Poin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {earningActivities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{activity.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                      </div>
                      <Badge variant="outline" className="bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300">
                        +{activity.points} poin
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Tingkatkan Poin Anda</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-1">Baca Materi</h3>
                    <p className="text-sm text-muted-foreground">Pelajari materi edukasi untuk mendapatkan poin awal</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-1">Ikuti Tantangan</h3>
                    <p className="text-sm text-muted-foreground">Ambil tantangan harian untuk poin besar</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-1">Raih Pencapaian</h3>
                    <p className="text-sm text-muted-foreground">Dapatkan tambahan poin dari badge spesial</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === "badges" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Pencapaian Anda</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {badges.map((badge) => {
                const IconComponent = badge.icon;
                return (
                  <Card 
                    key={badge.id} 
                    className={`hover:shadow-md transition-shadow ${
                      badge.earned 
                        ? "ring-2 ring-amber-500 bg-amber-50 dark:bg-amber-900/10" 
                        : "opacity-70"
                    }`}
                  >
                    <CardContent className="p-4 text-center">
                      <div className={`w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center ${
                        badge.earned 
                          ? "bg-amber-100 text-amber-600" 
                          : "bg-gray-100 text-gray-400"
                      }`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="font-semibold">{badge.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{badge.description}</p>
                      <Badge 
                        variant="outline" 
                        className={`mt-3 ${
                          badge.earned 
                            ? "border-amber-200 text-amber-700 dark:text-amber-300" 
                            : "border-gray-200 text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {badge.earned ? "Terkapai" : "Belum Tercapai"}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Tantangan Pencapaian</h2>
              <div className="space-y-4">
                {badges.filter(b => !b.earned).slice(0, 3).map((badge) => (
                  <Card key={badge.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <Trophy className="w-6 h-6 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{badge.name}</h3>
                          <p className="text-sm text-muted-foreground">{badge.description}</p>
                          <div className="mt-2">
                            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                              <span>Progres</span>
                              <span>0/10</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-amber-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Riwayat Poin</h2>
            <div className="space-y-4">
              {pointHistory.map((record) => (
                <Card key={record.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{record.activity}</h3>
                        <p className="text-sm text-muted-foreground">{record.description}</p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{record.date}</span>
                        </div>
                      </div>
                      <div className={`text-right ${record.type === 'earned' ? 'text-green-600' : 'text-red-600'}`}>
                        <span className="font-medium">
                          {record.type === 'earned' ? '+' : ''}{record.points}
                        </span>
                        <div className="text-xs">poin</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}