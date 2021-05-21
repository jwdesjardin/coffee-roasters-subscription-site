import { option } from '../../types'

export const questions: option[][] = [
	[
		{ value: 'Capsule', description: 'Compatible with Nespresso systems and similar brewers' },
		{
			value: 'Filter',
			description: 'For pour over or drip methods like Aeropress, Chemex, and V60',
		},
		{
			value: 'Espresso',
			description: 'Dense and finely ground beans for an intense, flavorful experience',
		},
	],
	[
		{
			value: 'Single origin',
			description: 'Distinct, high quality coffee from a specific family-owned farm',
		},
		{
			value: 'Decaf',
			description: 'For pour over or drip methods like Aeropress, Chemex, and V60',
		},
		{
			value: 'Blended',
			description: 'Combination of two or three dark roasted beans of organic coffees',
		},
	],
	[
		{ value: '250g', description: 'Perfect for the solo drinker. Yields about 12 delicious cups.' },
		{ value: '500g', description: 'Perfect option for a couple. Yields about 40 delectable cups.' },
		{
			value: '1000g',
			description: 'Perfect for offices and events. Yields about 90 delightful cups.',
		},
	],
	[
		{ value: 'Wholebean', description: 'Best choice if you cherish the full sensory experience' },
		{
			value: 'Filter',
			description: 'For drip or pour-over coffee methods such as V60 or Aeropress',
		},
		{
			value: 'Cafetiére',
			description: 'Course ground beans specially suited for french press coffee',
		},
	],
	[
		{
			value: 'Every week',
			description: '$14.00 per shipment. Includes free first-class shipping.',
		},
		{
			value: 'Every 2 weeks',
			description: '$17.25 per shipment. Includes free priority shipping.',
		},
		{ value: 'Every month', description: '$22.50 per shipment. Includes free priority shipping.' },
	],
]
