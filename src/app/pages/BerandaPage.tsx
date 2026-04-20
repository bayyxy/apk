import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { 
  Users, 
  TrendingUp, 
  Package, 
  AlertCircle,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const statistikData = [
  { label: 'Total Pasien', value: '1,234', change: '+12%', icon: Users, trend: 'up', color: 'from-blue-500 to-blue-600' },
  { label: 'Konsultasi Hari Ini', value: '48', change: '+5%', icon: TrendingUp, trend: 'up', color: 'from-green-500 to-green-600' },
  { label: 'Stok Bahan Makanan', value: '156', change: '-3%', icon: Package, trend: 'down', color: 'from-purple-500 to-purple-600' },
  { label: 'Peringatan Stok', value: '8', change: '+2', icon: AlertCircle, trend: 'up', color: 'from-red-500 to-red-600' },
];

const chartDataGizi = [
  { bulan: 'Jan', kalori: 2100, protein: 65, karbohidrat: 280 },
  { bulan: 'Feb', kalori: 2300, protein: 70, karbohidrat: 300 },
  { bulan: 'Mar', kalori: 2200, protein: 68, karbohidrat: 290 },
  { bulan: 'Apr', kalori: 2400, protein: 75, karbohidrat: 310 },
  { bulan: 'Mei', kalori: 2350, protein: 72, karbohidrat: 305 },
  { bulan: 'Jun', kalori: 2500, protein: 80, karbohidrat: 320 },
];

const chartDataPasien = [
  { bulan: 'Jan', jumlah: 180 },
  { bulan: 'Feb', jumlah: 220 },
  { bulan: 'Mar', jumlah: 195 },
  { bulan: 'Apr', jumlah: 240 },
  { bulan: 'Mei', jumlah: 260 },
  { bulan: 'Jun', jumlah: 285 },
];

const distribusiGizi = [
  { name: 'Karbohidrat', value: 45, color: '#3b82f6' },
  { name: 'Protein', value: 25, color: '#10b981' },
  { name: 'Lemak', value: 20, color: '#f59e0b' },
  { name: 'Vitamin', value: 10, color: '#8b5cf6' },
];

const aktivitasTerbaru = [
  { kegiatan: 'Konsultasi Gizi - Ahmad Saputra', waktu: '10 menit yang lalu', status: 'selesai' },
  { kegiatan: 'Update Menu Diet Diabetes', waktu: '1 jam yang lalu', status: 'diproses' },
  { kegiatan: 'Stok Beras ditambahkan 50kg', waktu: '2 jam yang lalu', status: 'selesai' },
  { kegiatan: 'Laporan Bulanan Generated', waktu: '3 jam yang lalu', status: 'selesai' },
];

export function BerandaPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-gray-900">Beranda</h1>
        <p className="text-gray-500">Selamat datang di Sistem Manajemen Bahan Gizi</p>
      </div>

      {/* Statistik Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statistikData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center gap-1">
                      {stat.trend === 'up' ? (
                        <ArrowUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-red-500" />
                      )}
                      <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                    </div>
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

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grafik Nutrisi */}
        <Card>
          <CardHeader>
            <CardTitle>Rata-rata Asupan Gizi Bulanan</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartDataGizi}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bulan" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="kalori" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="protein" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="karbohidrat" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Grafik Pasien */}
        <Card>
          <CardHeader>
            <CardTitle>Jumlah Pasien per Bulan</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartDataPasien}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bulan" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jumlah" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Distribusi Gizi */}
        <Card>
          <CardHeader>
            <CardTitle>Distribusi Asupan Gizi</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={distribusiGizi}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distribusiGizi.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Aktivitas Terbaru */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aktivitasTerbaru.map((aktivitas, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    aktivitas.status === 'selesai' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{aktivitas.kegiatan}</p>
                    <p className="text-sm text-gray-500">{aktivitas.waktu}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    aktivitas.status === 'selesai' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {aktivitas.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
