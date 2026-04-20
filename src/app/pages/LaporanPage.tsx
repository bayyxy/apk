import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { 
  Download, 
  FileText, 
  TrendingUp,
  Calendar,
  PieChart as PieChartIcon,
  BarChart3
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const laporanBulanan = [
  { bulan: 'Januari', pengadaan: 125, distribusi: 340, biaya: 45000000, efisiensi: 89 },
  { bulan: 'Februari', pengadaan: 132, distribusi: 356, biaya: 48000000, efisiensi: 91 },
  { bulan: 'Maret', pengadaan: 128, distribusi: 348, biaya: 46500000, efisiensi: 90 },
  { bulan: 'April', pengadaan: 148, distribusi: 380, biaya: 52000000, efisiensi: 92 },
];

const laporanGizi = [
  { pasien: 'Ahmad Saputra', diet: 'Diabetes', targetKalori: 1800, realisasi: 1750, kepatuhan: 97 },
  { pasien: 'Siti Nurhaliza', diet: 'Hipertensi', targetKalori: 1600, realisasi: 1580, kepatuhan: 99 },
  { pasien: 'Budi Santoso', diet: 'Obesitas', targetKalori: 1400, realisasi: 1420, kepatuhan: 99 },
  { pasien: 'Dewi Lestari', diet: 'Anemia', targetKalori: 1900, realisasi: 1850, kepatuhan: 97 },
];

const laporanStok = [
  { bahan: 'Beras', stokAwal: 200, masuk: 100, keluar: 145, stokAkhir: 155, status: 'Aman' },
  { bahan: 'Ayam', stokAwal: 60, masuk: 50, keluar: 65, stokAkhir: 45, status: 'Aman' },
  { bahan: 'Telur', stokAwal: 100, masuk: 80, keluar: 100, stokAkhir: 80, status: 'Aman' },
  { bahan: 'Bayam', stokAwal: 25, masuk: 15, keluar: 25, stokAkhir: 15, status: 'Rendah' },
  { bahan: 'Wortel', stokAwal: 40, masuk: 20, keluar: 30, stokAkhir: 30, status: 'Aman' },
];

const chartDataBiaya = [
  { bulan: 'Jan', pengadaan: 25, distribusi: 12, operasional: 8 },
  { bulan: 'Feb', pengadaan: 28, distribusi: 13, operasional: 7 },
  { bulan: 'Mar', pengadaan: 26, distribusi: 13, operasional: 7.5 },
  { bulan: 'Apr', pengadaan: 30, distribusi: 14, operasional: 8 },
];

export function LaporanPage() {
  const [activeTab, setActiveTab] = useState('bulanan');
  const [selectedPeriod, setSelectedPeriod] = useState('april-2026');

  const handleExportPDF = () => {
    alert('Ekspor laporan ke PDF akan diunduh...');
  };

  const handleExportExcel = () => {
    alert('Ekspor laporan ke Excel akan diunduh...');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Laporan</h1>
          <p className="text-gray-500">Laporan dan analisis data manajemen gizi</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportPDF}>
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline" onClick={handleExportExcel}>
            <Download className="h-4 w-4 mr-2" />
            Export Excel
          </Button>
        </div>
      </div>

      {/* Period Selection */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <Calendar className="h-5 w-5 text-gray-400" />
            <div className="flex-1 max-w-xs">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih periode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="januari-2026">Januari 2026</SelectItem>
                  <SelectItem value="februari-2026">Februari 2026</SelectItem>
                  <SelectItem value="maret-2026">Maret 2026</SelectItem>
                  <SelectItem value="april-2026">April 2026</SelectItem>
                  <SelectItem value="q1-2026">Q1 2026</SelectItem>
                  <SelectItem value="tahun-2026">Tahun 2026</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Total Biaya</p>
                <p className="text-2xl font-bold text-gray-900">Rp 52jt</p>
                <p className="text-xs text-green-600">+8% dari bulan lalu</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Total Distribusi</p>
                <p className="text-2xl font-bold text-gray-900">380</p>
                <p className="text-xs text-green-600">+9% dari bulan lalu</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <PieChartIcon className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Efisiensi</p>
                <p className="text-2xl font-bold text-gray-900">92%</p>
                <p className="text-xs text-green-600">+1% dari bulan lalu</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Laporan</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-xs text-gray-500">Laporan dibuat</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="bulanan">Laporan Bulanan</TabsTrigger>
          <TabsTrigger value="gizi">Laporan Gizi</TabsTrigger>
          <TabsTrigger value="stok">Laporan Stok</TabsTrigger>
        </TabsList>

        {/* Laporan Bulanan */}
        <TabsContent value="bulanan" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Grafik Biaya Operasional (dalam juta rupiah)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartDataBiaya}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="bulan" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pengadaan" fill="#3b82f6" name="Pengadaan" />
                  <Bar dataKey="distribusi" fill="#10b981" name="Distribusi" />
                  <Bar dataKey="operasional" fill="#f59e0b" name="Operasional" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rekapitulasi Bulanan</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bulan</TableHead>
                    <TableHead>Total Pengadaan</TableHead>
                    <TableHead>Total Distribusi</TableHead>
                    <TableHead>Biaya (Rp)</TableHead>
                    <TableHead>Efisiensi (%)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {laporanBulanan.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.bulan}</TableCell>
                      <TableCell>{item.pengadaan} transaksi</TableCell>
                      <TableCell>{item.distribusi} porsi</TableCell>
                      <TableCell>{item.biaya.toLocaleString('id-ID')}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 rounded-full h-2 max-w-[100px]">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${item.efisiensi}%` }}
                            />
                          </div>
                          <span>{item.efisiensi}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Laporan Gizi */}
        <TabsContent value="gizi" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Capaian Target Gizi Pasien</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Pasien</TableHead>
                    <TableHead>Jenis Diet</TableHead>
                    <TableHead>Target Kalori</TableHead>
                    <TableHead>Realisasi</TableHead>
                    <TableHead>Kepatuhan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {laporanGizi.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.pasien}</TableCell>
                      <TableCell>{item.diet}</TableCell>
                      <TableCell>{item.targetKalori} kkal</TableCell>
                      <TableCell>{item.realisasi} kkal</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 rounded-full h-2 max-w-[100px]">
                            <div
                              className={`h-2 rounded-full ${
                                item.kepatuhan >= 95 ? 'bg-green-500' : 'bg-yellow-500'
                              }`}
                              style={{ width: `${item.kepatuhan}%` }}
                            />
                          </div>
                          <span>{item.kepatuhan}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Rata-rata Kepatuhan</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">98%</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Total Pasien Aktif</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">42</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Jenis Diet</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Laporan Stok */}
        <TabsContent value="stok" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pergerakan Stok Bahan Makanan</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Bahan</TableHead>
                    <TableHead>Stok Awal</TableHead>
                    <TableHead>Masuk</TableHead>
                    <TableHead>Keluar</TableHead>
                    <TableHead>Stok Akhir</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {laporanStok.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.bahan}</TableCell>
                      <TableCell>{item.stokAwal}</TableCell>
                      <TableCell className="text-green-600">+{item.masuk}</TableCell>
                      <TableCell className="text-red-600">-{item.keluar}</TableCell>
                      <TableCell className="font-semibold">{item.stokAkhir}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            item.status === 'Aman'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {item.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Total Stok Masuk</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">265 kg</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Total Stok Keluar</p>
                  <p className="text-3xl font-bold text-red-600 mt-2">365 kg</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Nilai Stok</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">Rp 8.2jt</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
