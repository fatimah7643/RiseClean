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
  Filter,
  Calendar,
  Award
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function VerifikatorSubmissionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  
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
    alert(`Pengajuan ${id} telah disetujui dan poin telah diberikan`);
    // Here you would update the submission status in the database
  };

  const rejectSubmission = (id: number) => {
    if (!feedback.trim()) {
      alert('Silakan berikan alasan penolakan');
      return;
    }
    alert(`Pengajuan ${id} telah ditolak: ${feedback}`);
    // Here you would update the submission status and feedback in the database
  };

  const selectedSubmissionData = submissions.find(sub => sub.id === selectedSubmission);

  return (
    <MainLayout role="verifikator">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <Shield className="w-6 h-6 mr-2 text-blue-600" />
            Verifikasi Pengajuan
          </h1>
          <p className="text-muted-foreground">Verifikasi bukti tantangan dari pengguna</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Submissions List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Daftar Pengajuan</h2>
            <div className="space-y-4">
              {filteredSubmissions.map((submission) => (
                <Card 
                  key={submission.id} 
                  className={`cursor-pointer hover:shadow-md transition-shadow ${
                    selectedSubmission === submission.id 
                      ? 'ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => setSelectedSubmission(submission.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold truncate">{submission.challengeTitle}</h3>
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
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{submission.submissionDate}</span>
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

          {/* Submission Details */}
          <div className="lg:col-span-2">
            {selectedSubmissionData ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{selectedSubmissionData.challengeTitle}</CardTitle>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{selectedSubmissionData.userName}</span>
                    </div>
                    <Badge 
                      variant="outline"
                      className={
                        selectedSubmissionData.status === "approved" 
                          ? "border-green-200 text-green-700 dark:text-green-300" 
                          : selectedSubmissionData.status === "rejected"
                            ? "border-red-200 text-red-700 dark:text-red-300"
                            : "border-amber-200 text-amber-700 dark:text-amber-300"
                      }
                    >
                      {selectedSubmissionData.status === "approved" ? "Disetujui" : 
                       selectedSubmissionData.status === "rejected" ? "Ditolak" : "Menunggu"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-2">Bukti Tantangan</h3>
                      <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                        <span className="text-gray-500">Foto Bukti Tantangan</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 text-center">
                        Klik untuk memperbesar
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Detail Pengajuan</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pengguna</span>
                          <span>{selectedSubmissionData.userName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">ID Pengguna</span>
                          <span>{selectedSubmissionData.userId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">ID Tantangan</span>
                          <span>{selectedSubmissionData.challengeId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tanggal Pengajuan</span>
                          <span>{selectedSubmissionData.submissionDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status</span>
                          <span>
                            <Badge 
                              variant="outline"
                              className={
                                selectedSubmissionData.status === "approved" 
                                  ? "border-green-200 text-green-700 dark:text-green-300" 
                                  : selectedSubmissionData.status === "rejected"
                                    ? "border-red-200 text-red-700 dark:text-red-300"
                                    : "border-amber-200 text-amber-700 dark:text-amber-300"
                              }
                            >
                              {selectedSubmissionData.status === "approved" ? "Disetujui" : 
                               selectedSubmissionData.status === "rejected" ? "Ditolak" : "Menunggu"}
                            </Badge>
                          </span>
                        </div>
                        
                        {selectedSubmissionData.notes && (
                          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                            <div className="flex items-start">
                              <MessageSquare className="w-4 h-4 text-yellow-600 dark:text-yellow-300 mt-0.5 mr-2 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium text-sm text-yellow-700 dark:text-yellow-300">Catatan Sebelumnya</h4>
                                <p className="text-sm mt-1">{selectedSubmissionData.notes}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Catatan Verifikator</h3>
                    <Textarea 
                      placeholder="Tulis alasan jika menolak, atau catatan tambahan jika menyetujui..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="mb-4"
                    />
                    
                    <div className="flex space-x-3">
                      <Button 
                        className="flex-1 bg-green-500 hover:bg-green-600"
                        onClick={() => approveSubmission(selectedSubmissionData.id)}
                        disabled={selectedSubmissionData.status !== "pending"}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Setujui
                      </Button>
                      <Button 
                        className="flex-1 bg-red-500 hover:bg-red-600"
                        variant="outline"
                        onClick={() => rejectSubmission(selectedSubmissionData.id)}
                        disabled={selectedSubmissionData.status !== "pending"}
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Tolak
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center py-12">
                  <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Pilih Pengajuan</h3>
                  <p className="text-sm text-muted-foreground">
                    Pilih salah satu pengajuan dari daftar untuk melihat detail dan melakukan verifikasi
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}