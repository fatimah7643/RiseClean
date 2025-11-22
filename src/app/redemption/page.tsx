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
  MapPin,
  Users,
  Leaf
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RedemptionSystemPage() {
  const [activeTab, setActiveTab] = useState("how-to-redeem");

  // Mock data for redemption steps
  const redemptionSteps = [
    {
      id: 1,
      title: "Kumpulkan Poin",
      description: "Ikuti tantangan dan kuis untuk mendapatkan poin",
      icon: Coins
    },
    {
      id: 2,
      title: "Pilih Hadiah",
      description: "Pilih voucher sesuai kebutuhan Anda",
      icon: Package
    },
    {
      id: 3,
      title: "Tukarkan",
      description: "Tukarkan poin dengan voucher yang dipilih",
      icon: ShoppingCart
    },
    {
      id: 4,
      title: "Gunakan",
      description: "Gunakan kode voucher di Bank Sampah atau toko mitra",
      icon: CheckCircle
    }
  ];

  // Mock data for partner locations
  const partnerLocations = [
    {
      id: 1,
      name: "Toko Serba Ada",
      address: "Jl. Raya No. 123, Jakarta",
      distance: "0.5 km",
      active: true
    },
    {
      id: 2,
      name: "Bank Sampah Muda",
      address: "Jl. Hijau No. 45, Jakarta",
      distance: "1.2 km",
      active: true
    },
    {
      id: 3,
      name: "Toko Bersih",
      address: "Jl. Lingkungan No. 67, Jakarta",
      distance: "2.1 km",
      active: true
    }
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
      partner: "Toko Serba Ada"
    },
    {
      id: 2,
      rewardId: 1,
      rewardName: "Voucher Minyak Goreng 1L",
      redemptionCode: "RC-123456",
      status: "redeemed",
      redeemedAt: "2023-05-10",
      partner: "Bank Sampah Muda"
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
            Sistem Penukaran Hadiah
          </h1>
          <p className="text-muted-foreground">Pelajari cara menukar poin Anda dengan hadiah</p>
        </div>

        {/* Current Points Display */}
        <div className="mb-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Poin Anda</p>
                <p className="text-3xl font-bold text-green-600">1,350</p>
              </div>
              <div className="flex items-center">
                <Leaf className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="how-to-redeem">Cara Menukar</TabsTrigger>
            <TabsTrigger value="partners">Lokasi Mitra</TabsTrigger>
            <TabsTrigger value="history">Riwayat Penukaran</TabsTrigger>
          </TabsList>
        </Tabs>

        {activeTab === "how-to-redeem" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Cara Menukar Poin dengan Hadiah</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {redemptionSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <Card key={step.id}>
                    <CardContent className="p-4 text-center">
                      <div className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Proses Penukaran</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">1</div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Pilih Voucher</h3>
                      <p className="text-sm text-muted-foreground">
                        Pilih voucher yang tersedia di halaman Tukar Poin berdasarkan jumlah poin yang Anda miliki
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">2</div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Proses Penukaran</h3>
                      <p className="text-sm text-muted-foreground">
                        Klik tombol "Tukar Voucher" dan sistem akan mengurangi poin Anda sesuai dengan harga voucher
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">3</div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Dapatkan Kode Voucher</h3>
                      <p className="text-sm text-muted-foreground">
                        Setelah penukaran berhasil, Anda akan mendapatkan kode voucher unik yang dapat digunakan di toko mitra
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">4</div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Gunakan di Toko Mitra</h3>
                      <p className="text-sm text-muted-foreground">
                        Bawa bukti tantangan yang telah Anda selesaikan dan kode voucher ke toko mitra untuk mendapatkan hadiah
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "partners" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Lokasi Mitra Terdekat</h2>
            <div className="space-y-4">
              {partnerLocations.map((partner) => (
                <Card key={partner.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg mr-4">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{partner.name}</h3>
                            <p className="text-sm text-muted-foreground">{partner.address}</p>
                          </div>
                          <Badge 
                            variant={partner.active ? "default" : "outline"}
                            className={partner.active ? "bg-green-500 text-white" : ""}
                          >
                            {partner.active ? "Aktif" : "Tutup"}
                          </Badge>
                        </div>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{partner.distance}</span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-3"
                          onClick={() => alert(`Petunjuk arah ke ${partner.name}`)}
                        >
                          Lihat Rute
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Bank Sampah Mitra</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Selain toko mitra, Anda juga dapat menukarkan voucher Anda di Bank Sampah mitra. 
                  Bawa juga bukti tantangan yang telah Anda selesaikan untuk mendapatkan hadiah.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-medium flex items-center">
                    <Leaf className="w-5 h-5 mr-2 text-blue-600" />
                    Tips Penukaran
                  </h4>
                  <p className="mt-2 text-sm">
                    Bawa bukti tantangan yang telah Anda selesaikan saat menukarkan voucher. 
                    Ini untuk verifikasi bahwa Anda benar-benar melakukan tindakan lingkungan yang baik.
                  </p>
                </div>
              </CardContent>
            </Card>
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
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{redemption.rewardName}</h3>
                            <p className="text-sm text-muted-foreground">{redemption.partner}</p>
                          </div>
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
                        <p className="text-sm text-muted-foreground mt-2">{redemption.redemptionCode}</p>
                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{redemption.redeemedAt}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Detail
                          </Button>
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
                    Tukarkan poin Anda dengan hadiah untuk melihat riwayat di sini
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}