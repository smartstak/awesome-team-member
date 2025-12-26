/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { useState } from '@wordpress/element';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	ColorPalette,
} from '@wordpress/block-editor';

import { PanelBody, Button, RangeControl, FontSizePicker, SelectControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {
		name,
		designation,
		picture,
		imageWidth,
		imageRadius,
		nameColor,
		nameFontSize,
		nameFontSizeType,
		designationColor,
		designationFontSize,
		designationFontSizeType,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'awesome-team-member',
	} );

	const [ isMediaUploadOpen, setIsMediaUploadOpen ] = useState( false );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Image Settings', 'awesome-team-member' ) }
					initialOpen={ true }
					opened={ isMediaUploadOpen }
					onToggle={ () => setIsMediaUploadOpen( ! isMediaUploadOpen ) }
				>
					<RangeControl
						label={ __(
							'Image Width (px)',
							'awesome-team-member'
						) }
						value={ imageWidth }
						onChange={ ( value ) =>
							setAttributes( { imageWidth: value } )
						}
						min={ 50 }
						max={ 500 }
						step={ 1 }
					/>
					<RangeControl
						label={ __(
							'Image Border Radius (%)',
							'awesome-team-member'
						) }
						value={ imageRadius }
						onChange={ ( value ) =>
							setAttributes( { imageRadius: value } )
						}
						min={ 0 }
						max={ 100 }
						step={ 1 }
					/>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) =>
								setAttributes( { picture: media.url } )
							}
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<Button variant="secondary" onClick={ open }>
									{ picture
										? 'Replace Picture'
										: 'Upload picture' }
								</Button>
							) }
						/>
					</MediaUploadCheck>
				</PanelBody>
				<PanelBody
					title={ __( 'Name Settings', 'awesome-team-member' ) }
					initialOpen={ false }
				>
					<FontSizePicker
						label={ __( 'Name Font Size', 'awesome-team-member' ) }
						value={ nameFontSize }
						onChange={ ( value ) =>
							setAttributes( { nameFontSize: value } )
						}
						min={ 10 }
						max={ 100 }
						step={ 1 }
					/>
					<ColorPalette
						label={ __( 'Name Color', 'awesome-team-member' ) }
						value={ nameColor }
						onChange={ ( value ) =>
							setAttributes( { nameColor: value } )
						}
					/>
					<SelectControl
						label={ __( 'Name Font Size Type', 'awesome-team-member' ) }
						value={ nameFontSizeType }
						onChange={ ( value ) =>
							setAttributes( { nameFontSizeType: value } )
						}
						options={ [
							{ label: 'px', value: 'px' },
							{ label: '%', value: '%' },
							{ label: 'em', value: 'em' },
						] }
					/>
				</PanelBody>
				<PanelBody
					title={ __(
						'Designation Settings',
						'awesome-team-member'
					) }
					initialOpen={ false }
				>
					<FontSizePicker
						label={ __(
							'Designation Font Size',
							'awesome-team-member'
						) }
						value={ designationFontSize }
						onChange={ ( value ) =>
							setAttributes( { designationFontSize: value } )
						}
						min={ 10 }
						max={ 100 }
						step={ 1 }
					/>
					<ColorPalette
						label={ __(
							'Designation Color',
							'awesome-team-member'
						) }
						value={ designationColor }
						onChange={ ( value ) =>
							setAttributes( { designationColor: value } )
						}
					/>
					<SelectControl
						label={ __( 'Designation Font Size Type', 'awesome-team-member' ) }
						value={ designationFontSizeType }
						onChange={ ( value ) =>
							setAttributes( { designationFontSizeType: value } )
						}
						options={ [
							{ label: 'px', value: 'px' },
							{ label: '%', value: '%' },
							{ label: 'em', value: 'em' },
						] }
					/>
				</PanelBody>
			</InspectorControls>

			{ /* Main Block Editing UI */ }
			<div { ...blockProps }>
				<div className={ blockProps.className + '__profile' }>
					{ /* Profile picture preview */ }
					<div className={ blockProps.className + '__photo-wrapper' }>
						{ picture ? (
							<img
								className={ blockProps.className + '__photo' }
								src={ picture }
								alt={ name }
								style={ {
									width: imageWidth,
									borderRadius: imageRadius + '%',
								} }
							/>
						) : (
							<Button variant="secondary" onClick={ () => setIsMediaUploadOpen( ! isMediaUploadOpen ) }>
								Upload picture from Sidebar
							</Button>
						) }
					</div>

					{ /* Name */ }
					<RichText
						tagName="h3"
						className={ blockProps.className + '__name' }
						value={ name }
						placeholder="Full name..."
						onChange={ ( value ) =>
							setAttributes( { name: value } )
						}
						style={ {
							fontSize: nameFontSize + 'px',
							color: nameColor,
						} }
					/>
					{ /* Designation */ }
					<RichText
						tagName="p"
						className={ blockProps.className + '__designation' }
						value={ name }
						placeholder="Designation..."
						onChange={ ( value ) =>
							setAttributes( { designation: value } )
						}
						style={ {
							fontSize: designationFontSize + 'px',
							color: designationColor,
						} }
					/>
				</div>
			</div>
		</>
	);
}
