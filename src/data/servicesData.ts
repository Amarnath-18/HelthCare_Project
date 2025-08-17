import { TestTube, Heart, Stethoscope, Activity, Syringe, Droplets, Cross, Shield, Zap } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface SubService {
  id: string;
  name: string;
  description: string;
  price: string;
  duration?: string;
  icon: LucideIcon;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  subServices: SubService[];
}

export const servicesData: Service[] = [
  {
    id: 'lab-service',
    name: 'Laboratory Services',
    description: 'Complete laboratory testing services at your doorstep',
    icon: TestTube,
    subServices: [
      {
        id: 'sample-collection',
        name: 'Sample Collection',
        description: 'Professional sample collection service with sterile equipment and proper handling procedures.',
        price: 'NO Charge',
        duration: '15-30 mins',
        icon: TestTube
      },
      {
        id: 'blood-test',
        name: 'Blood Test',
        description: 'Comprehensive blood analysis including CBC, lipid profile, liver function, and more.',
        price: 'As Per Blood Test',
        duration: '10-15 mins',
        icon: Droplets
      },
      {
        id: 'urine-test',
        name: 'Urine Test',
        description: 'Complete urine analysis for kidney function, infections, and metabolic disorders.',
        price: 'As Per Urine Test',
        duration: '5-10 mins',
        icon: TestTube
      },
      {
        id: 'stool-test',
        name: 'Stool Test',
        description: 'Stool examination for digestive health, infections, and parasites.',
        price: 'As Per Stool Test',
        duration: '5-10 mins',
        icon: TestTube
      },
      {
        id: 'biopsy',
        name: 'Biopsy',
        description: 'Tissue sample collection for detailed pathological examination.',
        price: 'As Per Test',
        duration: '30-60 mins',
        icon: Syringe
      },
      {
        id: 'lab-others',
        name: 'Other Lab Tests',
        description: 'Additional laboratory tests including cultures, genetic tests, and specialized diagnostics.',
        price: 'Contact for pricing',
        duration: 'Varies',
        icon: TestTube
      }
    ]
  },
  {
    id: 'home-care',
    name: 'Home Care Services',
    description: 'Professional healthcare services in the comfort of your home',
    icon: Heart,
    subServices: [
      {
        id: 'blood-pressure',
        name: 'Blood Pressure Measurement',
        description: 'Regular blood pressure monitoring with digital equipment and professional assessment.',
        price: '₹50',
        duration: '10-15 mins',
        icon: Activity
      },
      {
        id: 'cbg-analysis',
        name: 'CBG Analysis',
        description: 'Capillary blood glucose testing for diabetes monitoring and management.',
        price: '₹100',
        duration: '5-10 mins',
        icon: TestTube
      },
      {
        id: 'dressing',
        name: 'Wound Dressing',
        description: 'Professional wound care, dressing changes, and healing assessment.',
        price: '₹400 onwards',
        duration: '20-45 mins',
        icon: Cross
      },
      {
        id: 'vital-checkup',
        name: 'Vital Signs Checkup',
        description: 'Complete vital signs monitoring including temperature, pulse, respiration, and BP.',
        price: '₹100',
        duration: '15-20 mins',
        icon: Stethoscope
      },
      {
        id: 'critical-monitoring',
        name: 'Critical ill Patient Monitoring',
        description: '24/7 monitoring for critically ill patients with specialized equipment and trained staff.',
        price: '₹2000 - ₹5000/day',
        duration: 'Continuous',
        icon: Activity
      },
      {
        id: 'supportive-care',
        name: 'Supportive Care',
        description: 'Comprehensive supportive care including medication administration and patient comfort.',
        price: '₹1000 - ₹1500/day',
        duration: 'As required',
        icon: Heart
      }
    ]
  },
  {
    id: 'procedures',
    name: 'Medical Procedures Services',
    description: 'Professional medical procedures performed by certified healthcare providers',
    icon: Syringe,
    subServices: [
      {
        id: 'iv-cannulation',
        name: 'IV Cannulation',
        description: 'Expert IV line insertion for medication administration and fluid therapy.',
        price: '₹200',
        duration: '10-20 mins',
        icon: Syringe
      },
      {
        id: 'injections',
        name: 'IV/IM Injections',
        description: 'Safe administration of intravenous and intramuscular injections.',
        price: '₹100 - ₹400',
        duration: '5-15 mins',
        icon: Syringe
      },
      {
        id: 'ng-tube',
        name: 'NG Tube Insertion',
        description: 'Nasogastric tube insertion for feeding or gastric decompression.',
        price: '₹500 - ₹800',
        duration: '15-30 mins',
        icon: Stethoscope
      },
      {
        id: 'catheterization',
        name: 'Urinary Catheterization',
        description: 'Sterile urinary catheter insertion and management.',
        price: '₹500 - ₹800',
        duration: '15-25 mins',
        icon: Droplets
      },
      {
        id: 'procedure-others',
        name: 'Other Procedures',
        description: 'Additional medical procedures including wound suturing, minor surgeries.',
        price: 'Contact for pricing',
        duration: 'Varies',
        icon: Syringe
      }
    ]
  },
  {
    id: 'emergency',
    name: 'Emergency & Others Services',
    description: 'Emergency medical services and specialized therapies',
    icon: Shield,
    subServices: [
      {
        id: 'emergency-medical',
        name: 'Emergency Medical Care',
        description: 'Immediate medical response for emergency situations and acute conditions.',
        price: '₹1000 - ₹3000',
        duration: 'As required',
        icon: Shield
      },
      {
        id: 'oxygen-therapy',
        name: 'Oxygen Therapy',
        description: 'Oxygen administration for respiratory support and recovery.',
        price: '₹500 - ₹1200/day',
        duration: 'Continuous',
        icon: Zap
      },
      {
        id: 'fluid-therapy',
        name: 'Fluid Therapy',
        description: 'IV fluid administration for dehydration, electrolyte balance, and recovery.',
        price: '₹400 - ₹800',
        duration: '1-4 hours',
        icon: Droplets
      },
      {
        id: 'emergency-others',
        name: 'Other Emergency Services',
        description: 'Additional emergency services including first aid, CPR, and medical transport.',
        price: 'Contact for pricing',
        duration: 'As required',
        icon: Shield
      }
    ]
  }
];

export const getAllServices = (): Service[] => servicesData;

export const getServiceById = (id: string): Service | undefined => 
  servicesData.find(service => service.id === id);

export const getSubServiceById = (serviceId: string, subServiceId: string): SubService | undefined => {
  const service = getServiceById(serviceId);
  return service?.subServices.find(sub => sub.id === subServiceId);
};
