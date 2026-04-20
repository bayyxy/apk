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
import { Calendar, User, FileText, Plus } from 'lucide-react';

const mockPasien = [
  { id: 1, nama: 'Ahmad Saputra', usia: 45, kondisi: 'Diabetes', diet: 'Rendah Gula', terakhirKonsul: '2026-04-03' },
  { id: 2, nama: 'Siti Nurhaliza', usia: 32, kondisi: 'Hipertensi', diet: 'Rendah Garam', terakhirKonsul: '2026-04-04' },
  { id: 3, nama: 'Budi Santoso', usia: 58, kondisi: 'Obesitas', diet: 'Rendah Kalori', terakhirKonsul: '2026-04-02' },
  { id: 4, nama: 'Dewi Lestari', usia: 28, kondisi: 'Anemia', diet: 'Tinggi Zat Besi', terakhirKonsul: '2026-04-05' },
];

const mockMenuDiet = [
  { id: 1, jenis: 'Diabetes', waktu: 'Sarapan', menu: 'Nasi Merah, Telur Rebus, Sayur Bayam', kalori: 350 },
  { id: 2, jenis: 'Diabetes', waktu: 'Makan Siang', menu: 'Ikan Kukus, Tahu, Tempe, Sayur Asem', kalori: 450 },
  { id: 3, jenis: 'Hipertensi', waktu: 'Sarapan', menu: 'Oatmeal, Pisang, Susu Rendah Lemak', kalori: 320 },
  { id: 4, jenis: 'Obesitas', waktu: 'Makan Siang', menu: 'Salad Sayur, Dada Ayam Panggang', kalori: 380 },
];

const mockRencanaGizi = [
  { id: 1, pasien: 'Ahmad Saputra', periode: '1-7 April 2026', targetKalori: 1800, status: 'Aktif' },
  { id: 2, pasien: 'Siti Nurhaliza', periode: '1-7 April 2026', targetKalori: 1600, status: 'Aktif' },
  { id: 3, pasien: 'Budi Santoso', periode: '1-7 April 2026', targetKalori: 1400, status: 'Aktif' },
];

export function ManajemenGiziPage() {
  const [activeTab, setActiveTab] = useState('pasien');

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manajemen Gizi</h1>
        <p className="text-gray-500">Kelola pasien, menu diet, dan rencana gizi</p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pasien">Data Pasien</TabsTrigger>
          <TabsTrigger value="menu">Menu Diet</TabsTrigger>
          <TabsTrigger value="rencana">Rencana Gizi</TabsTrigger>
        </TabsList>

        {/* Data Pasien */}
        <TabsContent value="pasien" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Daftar Pasien</CardTitle>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                <Plus className="h-4 w-4 mr-2" />
                Tambah Pasien
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Pasien</TableHead>
                    <TableHead>Usia</TableHead>
                    <TableHead>Kondisi</TableHead>
                    <TableHead>Diet</TableHead>
                    <TableHead>Terakhir Konsultasi</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPasien.map((pasien) => (
                    <TableRow key={pasien.id}>
                      <TableCell className="font-medium">{pasien.nama}</TableCell>
                      <TableCell>{pasien.usia} tahun</TableCell>
                      <TableCell>
                        <Badge variant="outline">{pasien.kondisi}</Badge>
                      </TableCell>
                      <TableCell>{pasien.diet}</TableCell>
                      <TableCell>{pasien.terakhirKonsul}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          <User className="h-4 w-4 mr-2" />
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

        {/* Menu Diet */}
        <TabsContent value="menu" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Menu Diet</CardTitle>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                <Plus className="h-4 w-4 mr-2" />
                Tambah Menu
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Jenis Diet</TableHead>
                    <TableHead>Waktu Makan</TableHead>
                    <TableHead>Menu</TableHead>
                    <TableHead>Kalori</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockMenuDiet.map((menu) => (
                    <TableRow key={menu.id}>
                      <TableCell>
                        <Badge>{menu.jenis}</Badge>
                      </TableCell>
                      <TableCell className="font-medium">{menu.waktu}</TableCell>
                      <TableCell>{menu.menu}</TableCell>
                      <TableCell>{menu.kalori} kkal</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Detail
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Total Menu Diet</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Jenis Diet</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">6</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Rata-rata Kalori</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">375</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Rencana Gizi */}
        <TabsContent value="rencana" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Rencana Gizi Pasien</CardTitle>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                <Plus className="h-4 w-4 mr-2" />
                Buat Rencana
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Pasien</TableHead>
                    <TableHead>Periode</TableHead>
                    <TableHead>Target Kalori/Hari</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockRencanaGizi.map((rencana) => (
                    <TableRow key={rencana.id}>
                      <TableCell className="font-medium">{rencana.pasien}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          {rencana.periode}
                        </div>
                      </TableCell>
                      <TableCell>{rencana.targetKalori} kkal</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">{rencana.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Lihat Detail
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
