"use client";

import { useState } from "react";
import MainLayout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Coins, 
  Package,
  ShoppingCart,
  CheckCircle,
  Clock,
  Users
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState("available");

  // Mock data for rewards
  const rewards = [
    {
      id: 1,
      name: "Voucher Minyak Goreng 1L",
      description: "Voucher pembelian minyak goreng di toko terdekat",
      points: 500,
      stock: 15,
      partner: "Toko Serba Ada",
      category: "sembako",
    },
    {
      id: 2,
      name: "Voucher Sabun Cuci 1Kg",
      description: "Voucher pembelian sabun cuci untuk kebutuhan rumah tangga",
      points: 300,
      stock: 25,
      partner: "Toko Serba Ada",
      category: "kebutuhan",
    },
    {
      id: 3,
      name: "Voucher Gula 1Kg",
      description: "Voucher pembelian gula pasir berkualitas",
      points: 400,
      stock: 8,
      partner: "Toko Serba Ada",
      category: "sembako",
    },
    {
      id: 4,
      name: "Deterjen 500gr",
      description: "Deterjen untuk pakaian Anda",
      points: 250,
      stock: 30,
      partner: "Toko Serba Ada",
      category: "kebutuhan",
    },
  ];

  // Mock data for redemption history
  const redemptionHistory = [
    {
      id: 1,
      rewardId: 2,
      rewardName: "Voucher Sabun Cuci 1Kg",
      redemptionCode: "RC-789456",
      status: "claimed", // claimed, redeemed
      redeemedAt: "2023-05-15",
    },
    {
      id: 2,
      rewardId: 1,
      rewardName: "Voucher Minyak Goreng 1L",
      redemptionCode: "RC-123456",
      status: "redeemed",
      redeemedAt: "2023-05-10",
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
            Tukar Poin
          </h1>
          <p className="text-muted-foreground">Tukarkan poin Anda dengan voucher sembako</p>
        </div>

        {/* Current Points Display */}
        <div className="mb-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Poin Anda</p>
                <p className="text-2xl font-bold">1,250</p>
              </div>
              <div className="flex items-center">
                <Coins className="w-8 h-8 text-green-600 mr-2" />
                <div className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                  +250 poin baru
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="available">Tersedia</TabsTrigger>
            <TabsTrigger value="history">Riwayat</TabsTrigger>
          </TabsList>
        </Tabs>

        {activeTab === "available" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Voucher yang Tersedia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rewards.map((reward) => (
                <Card key={reward.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{reward.name}</CardTitle>
                      <Badge 
                        variant="outline" 
                        className="border-blue-200 text-blue-700 dark:text-blue-300"
                      >
                        {reward.category === "sembako" ? "Sembako" : "Kebutuhan"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <Coins className="w-4 h-4 text-amber-500 mr-1" />
                        <span className="font-medium">{reward.points} poin</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Package className="w-4 h-4 mr-1" />
                        <span>{reward.stock} tersedia</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Users className="w-4 h-4 mr-1" />
                      <span>Ditukarkan di: {reward.partner}</span>
                    </div>
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600"
                      disabled={reward.stock === 0}
                      onClick={() => alert(`Menukar voucher: ${reward.name}`)}
                    >
                      {reward.stock === 0 ? "Habis" : "Tukar Voucher"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Riwayat Penukaran</h2>
            <div className="space-y-4">
              {redemptionHistory.map((redemption) => (
                <Card key={redemption.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg mr-4">
                        <ShoppingCart className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{redemption.rewardName}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{redemption.redemptionCode}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Badge 
                              variant="outline"
                              className={
                                redemption.status === "redeemed" 
                                  ? "border-green-200 text-green-700 dark:text-green-300" 
                                  : "border-amber-200 text-amber-700 dark:text-amber-300"
                              }
                            >
                              {redemption.status === "redeemed" ? "Ditukarkan" : "Belum Ditukar"}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{redemption.redeemedAt}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {redemptionHistory.length === 0 && (
                <div className="text-center py-8">
                  <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <h3 className="font-medium mb-1">Belum ada riwayat penukaran</h3>
                  <p className="text-sm text-muted-foreground">
                    Tukarkan poin Anda dengan voucher untuk melihat riwayat di sini
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* How to Redeem Section */}
        {activeTab === "available" && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Cara Menukar Poin</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-1">Kumpulkan Poin</h3>
                  <p className="text-sm text-muted-foreground">Ikuti tantangan dan kuis untuk mendapatkan poin</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-1">Pilih Voucher</h3>
                  <p className="text-sm text-muted-foreground">Pilih voucher sesuai kebutuhan Anda</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-1">Tukarkan</h3>
                  <p className="text-sm text-muted-foreground">Tukarkan poin dengan voucher yang dipilih</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <h3 className="font-semibold mb-1">Gunakan</h3>
                  <p className="text-sm text-muted-foreground">Gunakan kode voucher di Bank Sampah mitra</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}