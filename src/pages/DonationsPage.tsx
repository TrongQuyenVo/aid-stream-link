import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export default function DonationsPage() {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const campaigns = [
    {
      id: 1,
      title: 'Hỗ trợ phẫu thuật tim cho bé Mai',
      description: 'Bé Mai 5 tuổi cần phẫu thuật tim khẩn cấp để cứu sống.',
      raised: 85000000,
      target: 100000000,
      donors: 234,
      daysLeft: 15,
      image: null
    },
    {
      id: 2,
      title: 'Mua thiết bị y tế cho bệnh viện',
      description: 'Cần mua máy thở và thiết bị hỗ trợ cho bệnh viện từ thiện.',
      raised: 45000000,
      target: 80000000,
      donors: 156,
      daysLeft: 25,
      image: null
    },
    {
      id: 3,
      title: 'Hỗ trợ điều trị ung thư cho chú Nam',
      description: 'Chú Nam cần hỗ trợ chi phí điều trị ung thư phổi.',
      raised: 120000000,
      target: 150000000,
      donors: 456,
      daysLeft: 8,
      image: null
    },
  ];

  const recentDonations = [
    {
      id: 1,
      donor: 'Nguyễn Văn A',
      amount: 500000,
      campaign: 'Hỗ trợ phẫu thuật tim cho bé Mai',
      time: '2 giờ trước',
      isAnonymous: false
    },
    {
      id: 2,
      donor: 'Ẩn danh',
      amount: 1000000,
      campaign: 'Mua thiết bị y tế cho bệnh viện',
      time: '4 giờ trước',
      isAnonymous: true
    },
    {
      id: 3,
      donor: 'Công ty ABC',
      amount: 5000000,
      campaign: 'Hỗ trợ điều trị ung thư cho chú Nam',
      time: '1 ngày trước',
      isAnonymous: false
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="healthcare-heading text-3xl font-bold">Quyên góp từ thiện</h1>
          <p className="healthcare-subtitle">Tham gia các chiến dịch quyên góp giúp đỡ người có hoàn cảnh khó khăn</p>
        </div>
        <Button className="btn-charity">
          <Gift className="mr-2 h-4 w-4" />
          Quyên góp ngay
        </Button>
      </div>

      {/* Campaign Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="healthcare-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng quyên góp</CardTitle>
            <Gift className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">250M VNĐ</div>
            <p className="text-xs text-muted-foreground">+15.2% từ tháng trước</p>
          </CardContent>
        </Card>
        <Card className="healthcare-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nhà hảo tâm</CardTitle>
            <Heart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">846</div>
            <p className="text-xs text-muted-foreground">+23 người mới</p>
          </CardContent>
        </Card>
        <Card className="healthcare-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chiến dịch</CardTitle>
            <Target className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">12</div>
            <p className="text-xs text-muted-foreground">Đang hoạt động</p>
          </CardContent>
        </Card>
        <Card className="healthcare-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Thành công</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">87%</div>
            <p className="text-xs text-muted-foreground">Tỷ lệ đạt mục tiêu</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Campaigns */}
      <div>
        <h2 className="healthcare-heading text-2xl font-bold mb-6">Chiến dịch đang diễn ra</h2>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {campaigns.map((campaign, index) => {
            const progress = (campaign.raised / campaign.target) * 100;
            return (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="healthcare-card">
                  <div className="h-48 bg-gradient-primary rounded-t-lg flex items-center justify-center">
                    <Heart className="h-16 w-16 text-white" />
                  </div>
                  <CardHeader>
                    <CardTitle className="healthcare-heading">{campaign.title}</CardTitle>
                    <CardDescription>{campaign.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Đã quyên góp</span>
                        <span className="font-medium">
                          {(campaign.raised / 1000000).toFixed(1)}M / {(campaign.target / 1000000)}M VNĐ
                        </span>
                      </div>
                      <Progress value={progress} className="h-3 mb-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{progress.toFixed(1)}% hoàn thành</span>
                        <span>{campaign.donors} nhà hảo tâm</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">
                        Còn {campaign.daysLeft} ngày
                      </Badge>
                      <Button className="btn-charity">
                        Ủng hộ ngay
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Recent Donations */}
      <Card className="healthcare-card">
        <CardHeader>
          <CardTitle className="healthcare-heading">Quyên góp gần đây</CardTitle>
          <CardDescription>Những đóng góp mới nhất từ cộng đồng</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDonations.map((donation) => (
              <div
                key={donation.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-success flex items-center justify-center">
                    <Gift className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">
                      {donation.isAnonymous ? 'Ẩn danh' : donation.donor}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {donation.campaign}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-success">
                    {donation.amount.toLocaleString('vi-VN')} VNĐ
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {donation.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}