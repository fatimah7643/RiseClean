"use client";

import { useState } from "react";
import MainLayout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User,
  Award,
  Target,
  TrendingUp,
  Calendar,
  Leaf,
  Recycle,
  MapPin,
  Settings,
  Edit
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data
  const user = {
    name: "Siti Nurhaliza",
    email: "siti@example.com",
    role: "user",
    registrationDate: "2023-01-15",
    currentPoints: 1250,
    totalChallenges: 24,
    completedChallenges: 18,
    badges: [
      { id: 1, name: "Pejuang Sampah", description: "Selesaikan 5 tantangan", earned: true },
      { id: 2, name: "Ahli Edukasi", description: "Selesaikan 10 materi edukasi", earned: true },
      { id: 3, name: "Pemilah Hebat", description: "Selesaikan 10 tantangan pemilahan", earned: false },
      { id: 4, name: "Duta Lingkungan", description: "Ajak 5 orang teman", earned: false },
    ],
    recentActivities: [
      { action: "Menyelesaikan tantangan", target: "Pisahkan Sampah Organik", points: 20, date: "2023-05-15" },
      { action: "Menyelesaikan kuis", target: "Jenis Plastik", points: 10, date: "2023-05-14" },
      { action: "Mengambil tantangan", target: "Jual ke Bank Sampah", points: 0, date: "2023-05-12" },
    ]
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <User className="w-6 h-6 mr-2 text-green-600" />
            Profil Saya
          </h1>
          <p className="text-muted-foreground">Kelola informasi akun Anda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="mx-auto bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-3" />
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground">{user.email}</p>
                  <div className="mt-2">
                    <Badge variant="outline" className="capitalize">{user.role}</Badge>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                      <Edit className="w-4 h-4 mr-1" />
                      {isEditing ? "Batal" : "Edit Profil"}
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">Bergabung sejak: {user.registrationDate}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">Jakarta, Indonesia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-amber-600" />
                  Statistik Saya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{user.currentPoints}</p>
                    <p className="text-sm text-muted-foreground">Poin</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-600">{user.completedChallenges}/{user.totalChallenges}</p>
                    <p className="text-sm text-muted-foreground">Tantangan</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-600" />
                  Pencapaian
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {user.badges.map((badge) => (
                    <div 
                      key={badge.id} 
                      className={`text-center p-3 rounded-lg border ${
                        badge.earned 
                          ? "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800" 
                          : "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                        badge.earned ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-400"
                      }`}>
                        <Award className="w-6 h-6" />
                      </div>
                      <h4 className="font-medium text-sm">{badge.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
                      <Badge 
                        variant="outline" 
                        className={`mt-2 text-xs ${
                          badge.earned 
                            ? "border-yellow-200 text-yellow-700 dark:text-yellow-300" 
                            : "border-gray-200 text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {badge.earned ? "Terkapai" : "Belum Tercapai"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Leaf className="w-5 h-5 mr-2 text-green-600" />
                  Aktivitas Terbaru
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {user.recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-full mr-3">
                        <Recycle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.action} <span className="font-normal text-muted-foreground">"{activity.target}"</span></p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span>{activity.date}</span>
                          {activity.points > 0 && (
                            <span className="ml-2 flex items-center bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full text-xs">
                              +{activity.points} poin
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-blue-600" />
                  Pengaturan Akun
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Ganti Kata Sandi
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Notifikasi
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Privasi & Keamanan
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Bahasa
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}