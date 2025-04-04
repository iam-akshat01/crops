import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  RadioGroup,
  RadioGroupItem,
} from "../components/ui/radio-group";
import { toast } from "sonner";

export function SoilSamplingForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState("location");
  const [formData, setFormData] = useState({
    location: "",
    region: "",
    soilTexture: "",
    phLevel: "",
    organicMatter: "",
    moistureContent: 50,
    temperature: "",
    rainfall: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    salinity: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating form submission
    toast.success("Soil sample data submitted successfully!");
    navigate("/results");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const regions = [
    "India - Northeast",
    "India - East",
    "India - Central",
    "India - South",
    "India - West",
];

  return (
    <div className="container py-12  flex justify-around">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Soil Sampling Form</h1>
        
        <form onSubmit={handleSubmit}>
          <Tabs value={currentStep} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 gap-2">
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="texture">Texture</TabsTrigger>
              <TabsTrigger value="composition">Composition</TabsTrigger>
              <TabsTrigger value="nutrients">Nutrients</TabsTrigger>
            </TabsList>

            <TabsContent value="location">
              <Card className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="location">Sample Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="Enter the address"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="region">Region</Label>
                    <Select
                      name="region"
                      value={formData.region}
                      onValueChange={(value) =>
                        handleInputChange({ target: { name: "region", value } })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region} value={region}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="button"
                    onClick={() => setCurrentStep("texture")}
                    className="w-full"
                  >
                    Next Step
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="texture">
              <Card className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label>Soil Texture</Label>
                    <RadioGroup
                      name="soilTexture"
                      value={formData.soilTexture}
                      onValueChange={(value) =>
                        handleInputChange({ target: { name: "soilTexture", value } })
                      }
                    >
                      <div className="grid gap-2">
                        {["Clay", "Silt", "Sand", "Loam"].map((texture) => (
                          <div
                            key={texture}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem value={texture.toLowerCase()} id={texture} />
                            <Label htmlFor={texture}>{texture}</Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep("location")}
                    >
                      Previous
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setCurrentStep("composition")}
                      className="flex-1"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="composition">
              <Card className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phLevel">pH Level (0-14)</Label>
                    <Input
                      id="phLevel"
                      name="phLevel"
                      type="number"
                      min="0"
                      max="14"
                      step="0.1"
                      value={formData.phLevel}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="organicMatter">
                      Organic Matter Content (%)
                    </Label>
                    <Input
                      id="organicMatter"
                      name="organicMatter"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.organicMatter}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label>Moisture Content (%)</Label>
                    <div className="pt-2">
                      <Slider
                        value={[Number(formData.moistureContent)]}
                        onValueChange={(value) =>
                          handleInputChange({
                            target: { name: "moistureContent", value: value[0].toString() },
                          })
                        }
                        max={100}
                        step={1}
                      />
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      {formData.moistureContent}%
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep("texture")}
                    >
                      Previous
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setCurrentStep("nutrients")}
                      className="flex-1"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="nutrients">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nitrogen">Nitrogen (ppm)</Label>
                      <Input
                        id="nitrogen"
                        name="nitrogen"
                        type="number"
                        value={formData.nitrogen}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phosphorus">Phosphorus (ppm)</Label>
                      <Input
                        id="phosphorus"
                        name="phosphorus"
                        type="number"
                        value={formData.phosphorus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="potassium">Potassium (ppm)</Label>
                      <Input
                        id="potassium"
                        name="potassium"
                        type="number"
                        value={formData.potassium}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="salinity">
                        Salinity (dS/m)
                      </Label>
                      <Input
                        id="salinity"
                        name="salinity"
                        type="number"
                        value={formData.salinity}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep("composition")}
                    >
                      Previous
                    </Button>
                    <Button type="submit" className="flex-1">
                      Submit Sample
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </form>
      </div>
    </div>
  );
}