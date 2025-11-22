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
  Leaf,
  QrCode
} from "lucide-react";

export default function VoucherUsagePage() {
  // Mock data for active vouchers
  const activeVouchers = [
    {
      id: 1,
      rewardId: 2,
      rewardName: "Voucher Sabun Cuci 1Kg",
      redemptionCode: "RC-789456",
      status: "claimed", // claimed, redeemed
      expiryDate: "2023-07-15",
      partner: "Toko Serba Ada",
      pointsUsed: 300
    },
    {
      id: 2,
      rewardId: 3,
      rewardName: "Voucher Gula 1Kg",
      redemptionCode: "RC-123789",
      status: "claimed",
      expiryDate: "2023-06-30",
      partner: "Bank Sampah Muda",
      pointsUsed: 400
    },
  ];

  // Mock data for redemption steps
  const redemptionProcess = [
    {
      step: 1,
      title: "Bawa Bukti Tantangan",
      description: "Bawa bukti tantangan yang telah Anda selesaikan",
      icon: CheckCircle
    },
    {
      step: 2,
      title: "Tunjukkan Kode Voucher",
      description: "Berikan kode voucher unik Anda saat pembayaran",
      icon: QrCode
    },
    {
      step: 3,
      title: "Verifikasi dengan Petugas",
      description: "Petugas akan memverifikasi keaslian voucher Anda",
      icon: Users
    },
    {
      step: 4,
      title: "Dapatkan Hadiah",
      description: "Terima hadiah Anda setelah verifikasi selesai",
      icon: Package
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
            Penggunaan Voucher
          </h1>
          <p className="text-muted-foreground">Cara menukarkan kode voucher Anda di toko mitra</p>
        </div>

        {/* Active Vouchers */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Voucher Aktif Saya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeVouchers.map((voucher) => (
              <Card key={voucher.id} className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold">{voucher.rewardName}</h3>
                      <p className="text-sm text-muted-foreground">Mitra: {voucher.partner}</p>
                    </div>
                    <Badge variant="outline" className="border-green-200 text-green-700 dark:text-green-300">
                      Aktif
                    </Badge>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg mb-3">
                    <p className="text-center font-mono text-lg font-bold">{voucher.redemptionCode}</p>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span>Exp: {voucher.expiryDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Coins className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span>{voucher.pointsUsed} poin</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-3 bg-green-500 hover:bg-green-600">
                    <QrCode className="w-4 h-4 mr-2" />
                    Tampilkan Kode QR
                  </Button>
                </CardContent>
              </Card>
            ))}
            
            {activeVouchers.length === 0 && (
              <div className="col-span-2 text-center py-8">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <h3 className="font-medium mb-1">Tidak ada voucher aktif</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tukarkan poin Anda dengan voucher untuk mendapatkan kode
                </p>
                <Button className="bg-green-500 hover:bg-green-600">
                  Tukar Poin Sekarang
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Redemption Process */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Proses Penukaran Voucher</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {redemptionProcess.map((step) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.step} className="text-center">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-300 flex items-center justify-center mx-auto mb-3">
                      {step.step}
                    </div>
                    <IconComponent className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Perhatian Penting</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Harap bawa bukti tantangan yang telah Anda selesaikan sebagai verifikasi tambahan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Voucher hanya berlaku di toko atau Bank Sampah mitra yang tertera</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Voucher memiliki masa berlaku yang terbatas, pastikan untuk menukarkan sebelum tanggal habis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Kode voucher hanya bisa digunakan satu kali dan tidak dapat digunakan bersamaan dengan promo lain</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Pertanyaan Umum</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Bagaimana jika kode voucher saya tidak bisa digunakan?</h3>
                <p className="text-sm text-muted-foreground">
                  Pastikan kode voucher belum kadaluarsa dan digunakan di tempat yang benar. 
                  Jika masih bermasalah, hubungi tim dukungan kami melalui fitur bantuan.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Apakah saya bisa menukarkan voucher di tempat lain selain mitra terdaftar?</h3>
                <p className="text-sm text-muted-foreground">
                  Voucher hanya bisa ditukarkan di toko atau Bank Sampah mitra yang tertera. 
                  Untuk melihat daftar lengkap mitra, kunjungi halaman "Lokasi Mitra".
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Apakah saya perlu membawa bukti tantangan?</h3>
                <p className="text-sm text-muted-foreground">
                  Iya, harap selalu bawa bukti tantangan yang telah Anda selesaikan. 
                  Ini sebagai verifikasi bahwa Anda benar-benar melakukan tindakan lingkungan yang baik.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}