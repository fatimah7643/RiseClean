"use client";

import { useState } from "react";
import MainLayout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Calendar,
  Users,
  TrendingUp
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AdminChallengesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("list"); // list, create, edit

  // Mock data for challenges
  const challenges = [
    {
      id: 1,
      title: "Pisahkan Sampah Organik dan Anorganik",
      description: "Pisahkan sampah rumah tangga Anda hari ini",
      points: 20,
      difficulty: "easy",
      active: true,
      participants: 125,
      completionRate: 78
    },
    {
      id: 2,
      title: "Jual ke Bank Sampah",
      description: "Bawa sampah yang sudah dipilah ke Bank Sampah terdekat",
      points: 50,
      difficulty: "medium",
      active: true,
      participants: 89,
      completionRate: 65
    },
    {
      id: 3,
      title: "Edukasi Tetangga",
      description: "Ajak tetangga Anda untuk memilah sampah",
      points: 30,
      difficulty: "medium",
      active: true,
      participants: 64,
      completionRate: 45
    },
    {
      id: 4,
      title: "Kreasi dari Barang Bekas",
      description: "Buat kerajinan dari barang bekas di rumah",
      points: 40,
      difficulty: "hard",
      active: false,
      participants: 32,
      completionRate: 30
    },
  ];

  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          challenge.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || 
                         (statusFilter === "active" && challenge.active) || 
                         (statusFilter === "inactive" && !challenge.active);
    return matchesSearch && matchesStatus;
  });

  const toggleChallengeStatus = (id: number) => {
    alert(`Status tantangan ${id} telah diubah`);
    // Here you would update the challenge status in the database
  };

  return (
    <MainLayout role="admin">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <Target className="w-6 h-6 mr-2 text-green-600" />
            Manajemen Tantangan
          </h1>
          <p className="text-muted-foreground">Kelola tantangan komunitas RiseClean</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-green-500 p-3 rounded-lg mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Tantangan</p>
                <p className="text-2xl font-bold">{challenges.length}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Aktif Saat Ini</p>
                <p className="text-2xl font-bold">{challenges.filter(c => c.active).length}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-amber-500 p-3 rounded-lg mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Partisipasi Total</p>
                <p className="text-2xl font-bold">{challenges.reduce((sum, challenge) => sum + challenge.participants, 0)}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-4 flex flex-col md:flex-row gap-3 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Cari tantangan..." 
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Status</SelectItem>
                  <SelectItem value="active">Aktif</SelectItem>
                  <SelectItem value="inactive">Tidak Aktif</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={() => setActiveTab("create")}>
              <Plus className="w-4 h-4 mr-2" />
              Tambah Tantangan
            </Button>
          </CardContent>
        </Card>

        {/* Challenge List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Daftar Tantangan</h2>
          <div className="space-y-4">
            {filteredChallenges.map((challenge) => (
              <Card key={challenge.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-3/4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{challenge.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{challenge.description}</p>
                        </div>
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
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-3">
                        <div className="flex items-center text-sm">
                          <TrendingUp className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span>Poin: {challenge.points}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span>{challenge.participants} peserta</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Target className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span>Selesai: {challenge.completionRate}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/4 md:pl-4 mt-4 md:mt-0">
                      <div className="flex flex-col space-y-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => toggleChallengeStatus(challenge.id)}
                        >
                          {challenge.active ? "Nonaktifkan" : "Aktifkan"}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 dark:text-red-400">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Hapus
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredChallenges.length === 0 && (
              <div className="text-center py-8">
                <Target className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <h3 className="font-medium mb-1">Tidak ada tantangan</h3>
                <p className="text-sm text-muted-foreground">
                  {searchTerm || statusFilter !== "all" 
                    ? "Tidak ditemukan tantangan dengan kriteria ini" 
                    : "Belum ada tantangan yang dibuat"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}