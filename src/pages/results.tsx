import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Download, Share2 } from "lucide-react";

export function Results() {
  // Dummy data for demonstration
  const sampleData = {
    id: "SOIL-2024-001",
    date: "2024-03-15",
    location: "Field A-1",
    status: "Optimal",
    summary: {
      phLevel: 6.8,
      organicMatter: "4.2%",
      moisture: "35%",
      texture: "Loam",
    },
    nutrients: {
      nitrogen: { value: 45, status: "optimal" },
      phosphorus: { value: 30, status: "low" },
      potassium: { value: 180, status: "high" },
      calcium: { value: 1200, status: "optimal" },
      magnesium: { value: 150, status: "optimal" },
    },
    recommendations: [
      "Apply phosphorus fertilizer at 40 lbs/acre",
      "Reduce potassium application for next season",
      "Maintain current organic matter management practices",
      "Consider cover crops to improve soil structure",
    ],
    suitableCrops: [
      { name: "Corn", confidence: 95 },
      { name: "Soybeans", confidence: 90 },
      { name: "Wheat", confidence: 85 },
      { name: "Alfalfa", confidence: 80 },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "optimal":
        return "bg-green-500/10 text-green-500";
      case "low":
        return "bg-yellow-500/10 text-yellow-500";
      case "high":
        return "bg-blue-500/10 text-blue-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Soil Analysis Results</h1>
          <p className="text-muted-foreground">
            Sample ID: {sampleData.id} | Date: {sampleData.date}
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Sample Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">{sampleData.location}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <Badge variant="secondary">{sampleData.status}</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">pH Level</p>
              <p className="font-medium">{sampleData.summary.phLevel}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Organic Matter</p>
              <p className="font-medium">{sampleData.summary.organicMatter}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Moisture</p>
              <p className="font-medium">{sampleData.summary.moisture}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Texture</p>
              <p className="font-medium">{sampleData.summary.texture}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Nutrient Levels</h2>
          <div className="space-y-4">
            {Object.entries(sampleData.nutrients).map(([nutrient, data]) => (
              <div key={nutrient} className="flex items-center justify-between">
                <div>
                  <p className="capitalize">{nutrient}</p>
                  <p className="text-sm text-muted-foreground">
                    {data.value} ppm
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className={getStatusColor(data.status)}
                >
                  {data.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
          <ul className="space-y-2">
            {sampleData.recommendations.map((rec, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Suitable Crops</h2>
          <div className="space-y-4">
            {sampleData.suitableCrops.map((crop) => (
              <div
                key={crop.name}
                className="flex items-center justify-between"
              >
                <span>{crop.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${crop.confidence}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {crop.confidence}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-4">
          Need help interpreting these results?
        </p>
        <Button asChild>
          <Link to="/contact">Contact Our Experts</Link>
        </Button>
      </div>
    </div>
  );
}