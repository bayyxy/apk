import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const mockDataBahan = [
  { id: 1, nama: 'Beras', kategori: 'Karbohidrat', satuan: 'kg', stok: 150, harga: 12000, status: 'Tersedia' },
  { id: 2, nama: 'Ayam', kategori: 'Protein', satuan: 'kg', stok: 45, harga: 35000, status: 'Tersedia' },
  { id: 3, nama: 'Telur', kategori: 'Protein', satuan: 'kg', stok: 80, harga: 28000, status: 'Tersedia' },
  { id: 4, nama: 'Bayam', kategori: 'Sayuran', satuan: 'kg', stok: 15, harga: 8000, status: 'Stok Rendah' },
  { id: 5, nama: 'Wortel', kategori: 'Sayuran', satuan: 'kg', stok: 30, harga: 10000, status: 'Tersedia' },
  { id: 6, nama: 'Susu', kategori: 'Protein', satuan: 'liter', stok: 60, harga: 18000, status: 'Tersedia' },
];

export function KelolaDataIndukPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(mockDataBahan);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    kategori: '',
    satuan: '',
    stok: '',
    harga: '',
  });

  const filteredData = data.filter(item =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.kategori.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddData = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: data.length + 1,
      nama: formData.nama,
      kategori: formData.kategori,
      satuan: formData.satuan,
      stok: parseInt(formData.stok),
      harga: parseInt(formData.harga),
      status: parseInt(formData.stok) > 20 ? 'Tersedia' : 'Stok Rendah',
    };
    setData([...data, newItem]);
    setIsDialogOpen(false);
    setFormData({ nama: '', kategori: '', satuan: '', stok: '', harga: '' });
  };

  const handleDelete = (id: number) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Data Induk</h1>
          <p className="text-gray-500">Manajemen data bahan makanan dan gizi</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
              <Plus className="h-4 w-4 mr-2" />
              Tambah Data
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tambah Bahan Makanan Baru</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddData} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nama">Nama Bahan</Label>
                <Input
                  id="nama"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kategori">Kategori</Label>
                <Input
                  id="kategori"
                  value={formData.kategori}
                  onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="satuan">Satuan</Label>
                <Input
                  id="satuan"
                  value={formData.satuan}
                  onChange={(e) => setFormData({ ...formData, satuan: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stok">Stok</Label>
                <Input
                  id="stok"
                  type="number"
                  value={formData.stok}
                  onChange={(e) => setFormData({ ...formData, stok: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="harga">Harga (Rp)</Label>
                <Input
                  id="harga"
                  type="number"
                  value={formData.harga}
                  onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Simpan</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Cari nama bahan atau kategori..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Bahan Makanan</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Nama Bahan</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Satuan</TableHead>
                <TableHead>Stok</TableHead>
                <TableHead>Harga (Rp)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="font-medium">{item.nama}</TableCell>
                  <TableCell>{item.kategori}</TableCell>
                  <TableCell>{item.satuan}</TableCell>
                  <TableCell>{item.stok}</TableCell>
                  <TableCell>{item.harga.toLocaleString('id-ID')}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === 'Tersedia' ? 'default' : 'destructive'}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
