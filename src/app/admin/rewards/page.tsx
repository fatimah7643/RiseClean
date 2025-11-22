"use client";

import { useState } from "react";
import MainLayout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  TrendingUp,
  Users,
  Coins
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AdminRewardsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("list"); // list, create, edit

  // Mock data for rewards
  const rewards = [
    {
      id: 1,
      name: "Voucher Minyak Goreng 1L",
      description: "Voucher pembelian minyak goreng di toko terdekat",
      points: 500,
      stock: 15,
      category: "sembako",
      partner: "Toko Serba Ada",
      active: true,
      redeemedCount: 85
    },
    {
      id: 2,
      name: "Voucher Sabun Cuci 1Kg",
      description: "Voucher pembelian sabun cuci untuk kebutuhan rumah tangga",
      points: 300,
      stock: 25,
      category: "kebutuhan",
      partner: "Toko Serba Ada",
      active: true,
      redeemedCount: 120
    },
    {
      id: 3,
      name: "Voucher Gula 1Kg",
      description: "Voucher pembelian gula pasir berkualitas",
      points: 400,
      stock: 8,
      category: "sembako",
      partner: "Toko Serba Ada",
      active: true,
      redeemedCount: 65
    },
    {
      id: 4,
      name: "Deterjen 500gr",
      description: "Deterjen untuk pakaian Anda",
      points: 250,
      stock: 30,
      category: "kebutuhan",
      partner: "Toko Bersih",
      active: false,
      redeemedCount: 200
    },
  ];

  const filteredRewards = rewards.filter(reward => {
    const matchesSearch = reward.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          reward.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          reward.partner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || 
                         (statusFilter === "active" && reward.active) || 
                         (statusFilter === "inactive" && !reward.active);
    return matchesSearch && matchesStatus;
  });

  const toggleRewardStatus = (id: number) => {
    alert(`Status voucher ${id} telah diubah`);
    // Here you would update the reward status in the database
  };

  return (
    <MainLayout role="admin">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <Package className="w-6 h-6 mr-2 text-purple-600" />
            Manajemen Hadiah
          </h1>
          <p className="text-muted-foreground">Kelola voucher dan hadiah RiseClean</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-purple-500 p-3 rounded-lg mr-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Hadiah</p>
                <p className="text-2xl font-bold">{rewards.length}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-green-500 p-3 rounded-lg mr-4">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Penukaran Total</p>
                <p className="text-2xl font-bold">{rewards.reduce((sum, reward) => sum + reward.redeemedCount, 0)}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-amber-500 p-3 rounded-lg mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stok Tersedia</p>
                <p className="text-2xl font-bold">{rewards.reduce((sum, reward) => sum + reward.stock, 0)}</p>
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
                placeholder="Cari hadiah..." 
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
              Tambah Hadiah
            </Button>
          </CardContent>
        </Card>

        {/* Rewards List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Daftar Hadiah</h2>
          <div className="space-y-4">
            {filteredRewards.map((reward) => (
              <Card key={reward.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-3/4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{reward.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{reward.description}</p>
                        </div>
                        <Badge 
                          variant="outline"
                          className={
                            reward.category === "sembako" 
                              ? "border-green-200 text-green-700 dark:text-green-300" 
                              : "border-blue-200 text-blue-700 dark:text-blue-300"
                          }
                        >
                          {reward.category === "sembako" ? "Sembako" : "Kebutuhan"}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-3">
                        <div className="flex items-center text-sm">
                          <Coins className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span>{reward.points} poin</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Package className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span>Stok: {reward.stock}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span>Ditukarkan: {reward.redeemedCount}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span>Partner: {reward.partner}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/4 md:pl-4 mt-4 md:mt-0">
                      <div className="flex flex-col space-y-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => toggleRewardStatus(reward.id)}
                        >
                          {reward.active ? "Nonaktifkan" : "Aktifkan"}
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
            
            {filteredRewards.length === 0 && (
              <div className="text-center py-8">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <h3 className="font-medium mb-1">Tidak ada hadiah</h3>
                <p className="text-sm text-muted-foreground">
                  {searchTerm || statusFilter !== "all" 
                    ? "Tidak ditemukan hadiah dengan kriteria ini" 
                    : "Belum ada hadiah yang dibuat"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}