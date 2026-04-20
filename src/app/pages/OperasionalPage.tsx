import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus
} from 'lucide-react';

const mockPengadaan = [
  { id: 1, bahan: 'Beras', jumlah: 100, satuan: 'kg', supplier: 'PT. Pangan Jaya', tanggal: '2026-04-01', status: 'Selesai' },
  { id: 2, bahan: 'Daging Ayam', jumlah: 50, satuan: 'kg', supplier: 'CV. Protein Foods', tanggal: '2026-04-03', status: 'Proses' },
  { id: 3, bahan: 'Telur', jumlah: 200, satuan: 'butir', supplier: 'UD. Sumber Telur', tanggal: '2026-04-05', status: 'Pending' },
];

const mockDistribusi = [
  { id: 1, tujuan: 'Ruang Rawat Inap A', tanggal: '2026-04-05', menu: 'Menu Diabetes', porsi: 25, status: 'Terkirim' },
  { id: 2, tujuan: 'Ruang Rawat Inap B', tanggal: '2026-04-05', menu: 'Menu Umum', porsi: 40, status: 'Terkirim' },
  { id: 3, tujuan: 'Poliklinik', tanggal: '2026-04-05', menu: 'Snack Sehat', porsi: 15, status: 'Proses' },
];

const mockPemakaian = [
  { id: 1, bahan: 'Beras', jumlahAwal: 150, terpakai: 45, sisa: 105, tanggal: '2026-04-05' },
  { id: 2, bahan: 'Ayam', jumlahAwal: 45, terpakai: 12, sisa: 33, tanggal: '2026-04-05' },
  { id: 3, bahan: 'Telur', jumlahAwal: 80, terpakai: 30, sisa: 50, tanggal: '2026-04-05' },
  { id: 4, bahan: 'Bayam', jumlahAwal: 15, terpakai: 8, sisa: 7, tanggal: '2026-04-05' },
];

const statsOperasional = [
  { label: 'Total Pengadaan Bulan Ini', value: '148', icon: ShoppingCart, color: 'from-blue-500 to-blue-600' },
  { label: 'Distribusi Hari Ini', value: '80', icon: Package, color: 'from-green-500 to-green-600' },
  { label: 'Stok Kritis', value: '5', icon: AlertTriangle, color: 'from-red-500 to-red-600' },
  { label: 'Efisiensi Pemakaian', value: '92%', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
];

export function OperasionalPage() {
  const [activeTab, setActiveTab] = useState('pengadaan');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selesai':
      case 'Terkirim':
        return 'bg-green-500';
      case 'Proses':
        return 'bg-yellow-500';
      case 'Pending':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Selesai':
      case 'Terkirim':
        return <CheckCircle className="h-4 w-4" />;
      case 'Proses':
        return <Clock className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Operasional</h1>
        <p className="text-gray-500">Pengadaan, distribusi, dan monitoring pemakaian bahan</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsOperasional.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pengadaan">Pengadaan</TabsTrigger>
          <TabsTrigger value="distribusi">Distribusi</TabsTrigger>
          <TabsTrigger value="pemakaian">Pemakaian Bahan</TabsTrigger>
        </TabsList>

        {/* Pengadaan */}
        <TabsContent value="pengadaan" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Riwayat Pengadaan Bahan</CardTitle>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                <Plus className="h-4 w-4 mr-2" />
                Buat Pengadaan
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No. PO</TableHead>
                    <TableHead>Bahan</TableHead>
                    <TableHead>Jumlah</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPengadaan.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">PO-{item.id.toString().padStart(4, '0')}</TableCell>
                      <TableCell>{item.bahan}</TableCell>
                      <TableCell>{item.jumlah} {item.satuan}</TableCell>
                      <TableCell>{item.supplier}</TableCell>
                      <TableCell>{item.tanggal}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(item.status)}>
                          <span className="mr-1">{getStatusIcon(item.status)}</span>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Detail
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Distribusi */}
        <TabsContent value="distribusi" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Distribusi Makanan</CardTitle>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                <Plus className="h-4 w-4 mr-2" />
                Catat Distribusi
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No. Distribusi</TableHead>
                    <TableHead>Tujuan</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Menu</TableHead>
                    <TableHead>Porsi</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockDistribusi.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">DIST-{item.id.toString().padStart(4, '0')}</TableCell>
                      <TableCell>{item.tujuan}</TableCell>
                      <TableCell>{item.tanggal}</TableCell>
                      <TableCell>{item.menu}</TableCell>
                      <TableCell>{item.porsi} porsi</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(item.status)}>
                          <span className="mr-1">{getStatusIcon(item.status)}</span>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Detail
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pemakaian Bahan */}
        <TabsContent value="pemakaian" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monitoring Pemakaian Bahan Hari Ini</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bahan</TableHead>
                    <TableHead>Stok Awal</TableHead>
                    <TableHead>Terpakai</TableHead>
                    <TableHead>Sisa</TableHead>
                    <TableHead>Persentase</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPemakaian.map((item) => {
                    const persentase = Math.round((item.terpakai / item.jumlahAwal) * 100);
                    const statusStok = item.sisa < 10 ? 'Kritis' : item.sisa < 30 ? 'Rendah' : 'Aman';
                    
                    return (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.bahan}</TableCell>
                        <TableCell>{item.jumlahAwal}</TableCell>
                        <TableCell>{item.terpakai}</TableCell>
                        <TableCell>{item.sisa}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-gray-200 rounded-full h-2 max-w-[100px]">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${persentase}%` }}
                              />
                            </div>
                            <span className="text-sm">{persentase}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={statusStok === 'Aman' ? 'default' : statusStok === 'Rendah' ? 'secondary' : 'destructive'}
                          >
                            {statusStok}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Total Bahan Terpakai</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">95 kg</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Efisiensi Penggunaan</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">92%</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Nilai Pemakaian</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">Rp 2.4jt</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
