<?php
// This file is generated. Do not modify it manually.
return array(
	'awesome-team-member' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'awesome-blocks/awesome-team-member',
		'version' => '0.1.0',
		'title' => 'Awesome Team Member',
		'category' => 'design',
		'icon' => 'smiley',
		'description' => 'Block that shows team member',
		'example' => array(
			
		),
		'attributes' => array(
			'name' => array(
				'type' => 'string',
				'default' => 'Tushar Sharma'
			),
			'designation' => array(
				'type' => 'string',
				'default' => 'Sr. WordPress Developer'
			),
			'picture' => array(
				'type' => 'string'
			),
			'imageWidth' => array(
				'type' => 'number',
				'default' => 150
			),
			'imageRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'nameColor' => array(
				'type' => 'string',
				'default' => '#000'
			),
			'nameFontSize' => array(
				'type' => 'number',
				'default' => 24
			),
			'nameFontSizeType' => array(
				'enum' => array(
					'px',
					'em',
					'rem'
				)
			),
			'designationColor' => array(
				'type' => 'string',
				'default' => '#000'
			),
			'designationFontSize' => array(
				'type' => 'number',
				'default' => 24
			),
			'designationFontSizeType' => array(
				'enum' => array(
					'px',
					'em',
					'rem'
				)
			)
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'color' => array(
				'background' => true,
				'text' => true
			),
			'typography' => array(
				'fontSize' => true,
				'textAlign' => true,
				'lineHeight' => true
			)
		),
		'textdomain' => 'awesome-team-member',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
