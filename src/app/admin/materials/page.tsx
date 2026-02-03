"use client";

import { useState } from "react";
import MainLayout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Calendar,
  Users,
  TrendingUp,
  BookMarked
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AdminMaterialsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("list"); // list, create, edit

  // Mock data for educational materials
  const materials = [
    {
      id: 1,
      title: "Jenis Plastik dan Pemilahan",
      description: "Pelajari jenis-jenis plastik dan cara memilahnya dengan benar",
      points: 10,
      category: "pemilahan",
      active: true,
      completionRate: 78,
      dateCreated: "2023-01-15"
    },
    {
      id: 2,
      title: "Dampak Sampah terhadap Lingkungan",
      description: "Kenali dampak buruk dari penanganan sampah yang tidak tepat",
      points: 15,
      category: "lingkungan",
      active: true,
      completionRate: 65,
      dateCreated: "2023-02-20"
    },
    {
      id: 3,
      title: "Manfaat Bank Sampah",
      description: "Temukan manfaat dari mengelola sampah melalui Bank Sampah",
      points: 12,
      category: "ekonomi",
      active: true,
      completionRate: 45,
      dateCreated: "2023-03-10"
    },
    {
      id: 4,
      title: "Kreasi dari Barang Bekas",
      description: "Ide kreatif untuk mendaur ulang barang-barang bekas",
      points: 18,
      category: "kreasi",
      active: false,
      completionRate: 30,
      dateCreated: "2023-04-05"
    },
  ];

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || 
                         (statusFilter === "active" && material.active) || 
                         (statusFilter === "inactive" && !material.active);
    return matchesSearch && matchesStatus;
  });

  const toggleMaterialStatus = (id: number) => {
    alert(`Status materi ${id} telah diubah`);
    // Here you would update the material status in the database
  };

  return (
    <MainLayout role="admin">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
            Manajemen Materi
          </h1>
          <p className="text-muted-foreground">Kelola materi edukasi RiseClean</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Materi</p>
                <p className="text-2xl font-bold">{materials.length}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-green-500 p-3 rounded-lg mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Aktif Saat Ini</p>
                <p className="text-2xl font-bold">{materials.filter(m => m.active).length}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-amber-500 p-3 rounded-lg mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rata-rata Penyelesaian</p>
                <p className="text-2xl font-bold">
                  {Math.round(materials.reduce((sum, mat) => sum + mat.completionRate, 0) / materials.length)}%
                </p>
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
                placeholder="Cari materi..." 
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
              Tambah Materi
            </Button>
          </CardContent>
        </Card>

        {/* Materials List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Daftar Materi</h2>
          <div className="space-y-4">
            {filteredMaterials.map((material) => (
              <Card key={material.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-3/4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{material.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{material.description}</p>
                        </div>
                        <Badge 
                          variant="outline"
                          className="border-purple-200 text-purple-700 dark:text-purple-300"
                        >
                          {material.category}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-3">
                        <div className="flex items-center text-sm">
                          <BookOpen className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span>Poin: {material.points}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span>Dibuat: {material.dateCreated}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <TrendingUp className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span>Penyelesaian: {material.completionRate}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/4 md:pl-4 mt-4 md:mt-0">
                      <div className="flex flex-col space-y-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => toggleMaterialStatus(material.id)}
                        >
                          {material.active ? "Nonaktifkan" : "Aktifkan"}
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
            
            {filteredMaterials.length === 0 && (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <h3 className="font-medium mb-1">Tidak ada materi</h3>
                <p className="text-sm text-muted-foreground">
                  {searchTerm || statusFilter !== "all" 
                    ? "Tidak ditemukan materi dengan kriteria ini" 
                    : "Belum ada materi yang dibuat"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}