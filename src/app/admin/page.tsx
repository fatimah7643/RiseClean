"use client";

import { useState } from "react";
import MainLayout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users,
  Target,
  TrendingUp,
  BookOpen,
  Shield,
  BarChart3,
  Plus,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Activity,
  UserRound,
  Package
} from "lucide-react";

export default function AdminDashboardPage() {
  // Mock data for stats
  const stats = {
    totalUsers: 1250,
    totalChallenges: 45,
    totalMaterials: 18,
    totalRewards: 25,
    newSubmissions: 12,
    completedSubmissions: 8,
    rejectedSubmissions: 3,
    totalPointsDistributed: 245000
  };

  // Mock data for recent activities
  const recentActivities = [
    { id: 1, user: "Siti Nurhaliza", action: "Menyelesaikan tantangan", target: "Pisahkan Sampah", time: "5 menit yang lalu" },
    { id: 2, user: "Budi Santoso", action: "Menukar poin", target: "Voucher Sabun 1Kg", time: "1 jam yang lalu" },
    { id: 3, user: "Ani Lestari", action: "Menyelesaikan kuis", target: "Jenis Plastik", time: "2 jam yang lalu" },
    { id: 4, user: "Joko Widodo", action: "Mengambil tantangan", target: "Edukasi Tetangga", time: "3 jam yang lalu" },
    { id: 5, user: "Dewi Sartika", action: "Mengunggah bukti", target: "Kreasi Barang Bekas", time: "4 jam yang lalu" },
  ];

  return (
    <MainLayout role="admin">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <BarChart3 className="w-6 h-6 mr-2 text-green-600" />
            Dasbor Admin
          </h1>
          <p className="text-muted-foreground">Kelola sistem RiseClean</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Pengguna</p>
                <p className="text-2xl font-bold">{stats.totalUsers}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-green-500 p-3 rounded-lg mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tantangan Aktif</p>
                <p className="text-2xl font-bold">{stats.totalChallenges}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-amber-500 p-3 rounded-lg mr-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Materi Edukasi</p>
                <p className="text-2xl font-bold">{stats.totalMaterials}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-purple-500 p-3 rounded-lg mr-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Voucher Tersedia</p>
                <p className="text-2xl font-bold">{stats.totalRewards}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Akses Cepat</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-medium">Tantangan</h3>
                <p className="text-xs text-muted-foreground">Kelola tantangan</p>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-medium">Materi</h3>
                <p className="text-xs text-muted-foreground">Tambah materi baru</p>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="bg-amber-100 dark:bg-amber-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Package className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-medium">Voucher</h3>
                <p className="text-xs text-muted-foreground">Kelola hadiah</p>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-medium">Verifikasi</h3>
                <p className="text-xs text-muted-foreground">Lihat pengajuan</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-600" />
                Aktivitas Terbaru
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full mr-3">
                      <UserRound className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.action} <span className="font-medium">"{activity.target}"</span></p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Statistik Sistem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pengajuan Baru</span>
                  <span className="font-medium">{stats.newSubmissions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Disetujui</span>
                  <span className="font-medium text-green-600">{stats.completedSubmissions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ditolak</span>
                  <span className="font-medium text-red-600">{stats.rejectedSubmissions}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-muted-foreground">Total Poin Terdistribusi</span>
                  <span className="font-medium">{stats.totalPointsDistributed.toLocaleString()}</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Tantangan Baru
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-600" />
              Pengajuan Terbaru
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Pengguna</th>
                    <th className="text-left py-2">Tantangan</th>
                    <th className="text-left py-2">Tanggal</th>
                    <th className="text-left py-2">Status</th>
                    <th className="text-left py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivities.slice(0, 4).map((activity, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2">{activity.user}</td>
                      <td className="py-2">{activity.target}</td>
                      <td className="py-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{activity.time}</span>
                        </div>
                      </td>
                      <td className="py-2">
                        <Badge variant="outline" className="border-amber-200 text-amber-700 dark:text-amber-300">
                          Menunggu
                        </Badge>
                      </td>
                      <td className="py-2">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}