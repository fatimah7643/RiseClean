"use client";

import { useState } from "react";
import MainLayout from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield,
  User,
  Target,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  MessageSquare,
  Search,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function VerifikatorDashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data for challenge submissions
  const submissions = [
    {
      id: 1,
      userId: "user123",
      userName: "Siti Nurhaliza",
      challengeId: 2,
      challengeTitle: "Jual ke Bank Sampah",
      submissionDate: "2023-05-15",
      status: "pending", // pending, approved, rejected
      proofImageUrl: "/placeholder-proof.jpg",
      notes: ""
    },
    {
      id: 2,
      userId: "user456",
      userName: "Budi Santoso",
      challengeId: 1,
      challengeTitle: "Pisahkan Sampah Organik dan Anorganik",
      submissionDate: "2023-05-14",
      status: "pending",
      proofImageUrl: "/placeholder-proof.jpg",
      notes: ""
    },
    {
      id: 3,
      userId: "user789",
      userName: "Ani Lestari",
      challengeId: 3,
      challengeTitle: "Edukasi Tetangga",
      submissionDate: "2023-05-13",
      status: "approved",
      proofImageUrl: "/placeholder-proof.jpg",
      notes: "Foto jelas dan sesuai tantangan"
    },
    {
      id: 4,
      userId: "user101",
      userName: "Joko Widodo",
      challengeId: 4,
      challengeTitle: "Kreasi dari Barang Bekas",
      submissionDate: "2023-05-12",
      status: "rejected",
      proofImageUrl: "/placeholder-proof.jpg",
      notes: "Foto tidak jelas, tidak menunjukkan hasil karya"
    },
  ];

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = submission.userName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          submission.challengeTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || submission.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const approveSubmission = (id: number) => {
    alert(`Pengajuan ${id} telah disetujui`);
  };

  const rejectSubmission = (id: number) => {
    alert(`Pengajuan ${id} telah ditolak`);
  };

  return (
    <MainLayout role="verifikator">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <Shield className="w-6 h-6 mr-2 text-blue-600" />
            Dasbor Verifikator
          </h1>
          <p className="text-muted-foreground">Verifikasi bukti tantangan dari pengguna</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tunggu Verifikasi</p>
                <p className="text-2xl font-bold">
                  {submissions.filter(s => s.status === "pending").length}
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-green-500 p-3 rounded-lg mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Disetujui Hari Ini</p>
                <p className="text-2xl font-bold">
                  {submissions.filter(s => s.status === "approved" && s.submissionDate === "2023-05-15").length}
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-4 flex items-center">
              <div className="bg-amber-500 p-3 rounded-lg mr-4">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ditolak Hari Ini</p>
                <p className="text-2xl font-bold">
                  {submissions.filter(s => s.status === "rejected" && s.submissionDate === "2023-05-15").length}
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
                placeholder="Cari pengguna atau tantangan..." 
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
                  <SelectItem value="pending">Menunggu</SelectItem>
                  <SelectItem value="approved">Disetujui</SelectItem>
                  <SelectItem value="rejected">Ditolak</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Submissions List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Daftar Pengajuan Verifikasi</h2>
          <div className="space-y-4">
            {filteredSubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0 md:pr-4">
                      <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-40" />
                      <p className="text-center text-sm text-muted-foreground mt-2">Bukti Tantangan</p>
                    </div>
                    <div className="md:w-3/4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{submission.challengeTitle}</h3>
                          <p className="text-sm text-muted-foreground">oleh {submission.userName}</p>
                        </div>
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
                      
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Diajukan {submission.submissionDate}</span>
                      </div>
                      
                      <div className="mt-4 flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => approveSubmission(submission.id)}
                        >
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          Setujui
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => rejectSubmission(submission.id)}
                        >
                          <XCircle className="w-4 h-4 mr-2 text-red-600" />
                          Tolak
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Lihat Detail
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredSubmissions.length === 0 && (
              <div className="text-center py-8">
                <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <h3 className="font-medium mb-1">Tidak ada pengajuan</h3>
                <p className="text-sm text-muted-foreground">
                  {searchTerm || statusFilter !== "all" 
                    ? "Tidak ditemukan pengajuan dengan kriteria ini" 
                    : "Belum ada pengajuan verifikasi yang masuk"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}